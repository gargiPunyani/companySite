import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { MayaWebTechDB } from "../../Firebase";
import { Loader2 } from "lucide-react";

const ContactUsForm = ({ type }: { type: string }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let formIsValid = true;
    const newErrors: any = {};

    if (!formData.name.trim()) {
      formIsValid = false;
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Email is invalid.";
    }

    if (!formData.message.trim()) {
      formIsValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      try {
        await addDoc(collection(MayaWebTechDB, "MayaWebTechDB"), {
          formData,
        });
        toast({
          variant: "green",
          title: "We got your message!",
          description: "Our team will contact you soon.",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setErrors({});
    }
    setIsLoading(false);
  };
  return (
    <div>
      <section
        className={`bg-[url('/bg-pattern-image-min.png')] bg-cover dark:bg-[url('/dark-red.jpg')] w-full ${
          type === "contactPage" ? "py-32" : "py-8"
        } `}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto space-y-2 sm:space-y-5">
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-5xl sm:text-center">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed sm:text-center">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-700 dark:text-red-100 text-sm">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-700 dark:text-red-100 text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px]"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-700 dark:text-red-100 text-sm">
                    {errors.message}
                  </p>
                )}
              </div>
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full bg-red-700 dark:text-white hover:bg-red-700/90"
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Please Wait" : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsForm;
