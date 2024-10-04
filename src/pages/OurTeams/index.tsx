import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const teamMembers = [
  // {
  //   name: "Mukul Sharma",
  //   position: "Director",
  //   email: "info@webwisestudio.in",
  //   avatar: "/placeholder-user.jpg",
  //   imgSrc: "/team/blankDp.webp",
  //   fallback: "MS",
  // },
  {
    name: "Ajit Singh",
    position: "Director",
    avatar: "/placeholder-user.jpg",
    imgSrc: "/team/ajitSingh.webp",
    fallback: "AS",
  },
  {
    name: "Vijay Patidar",
    position: "COO (Chief Operating Officer)",
    avatar: "/placeholder-user.jpg",
    imgSrc: "/team/vijay.webp",
    fallback: "VP",
  },
  {
    name: "Pratik Kanani",
    position: "Business Head",
    avatar: "/placeholder-user.jpg",
    imgSrc: "/team/pratik.webp",
    fallback: "PK",
  },
  {
    name: "Sarvesh Maurya",
    position: "Sales Head",
    avatar: "/placeholder-user.jpg",
    imgSrc: "/team/sarvesh.webp",
    fallback: "SM",
  },
  {
    name: "Ajay Yadav",
    position: "Project Manager",
    avatar: "/placeholder-user.jpg",
    imgSrc: "/team/ajay.webp",
    fallback: "AY",
  },
  {
    name: "Yugal Patidar",
    position: "Hubspot Developer | Web Designer",
    avatar: "/placeholder-user.jpg",
    imgSrc: "/team/yugal.webp",
    fallback: "YP",
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[url('/bg-pink.jpg')] dark:bg-[url('/dark-red1.webp')] bg-cover bg-no-repeat py-32 md:py-36 min-h-[60vh] sm:min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Meet Our Talented Team
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
              At{" "}
              <span className="font-semibold text-red-700">
                {" "}
                Maya Web Tech,
              </span>{" "}
              we're proud to have a team of passionate and skilled individuals
              who work together to deliver exceptional products and services.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 ">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer hover:shadow-2xl "
              >
                <div className="relative">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-rose-100 to-white dark:from-red-900 ">
                  <div className="flex items-center mb-3">
                    <Avatar className="border-2 border-card">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3 text-left">
                      <h3 className="text-base font-semibold text-card-foreground">
                        {member.name}
                      </h3>
                      <p className="text-xs text-muted-foreground dark:text-gray-300">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
