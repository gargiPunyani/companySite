import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function CommonIconCloud({
  title,
  icons,
}: {
  title: string;
  icons?: any;
}) {
  return (
    <div className="relative flex flex-col sm:flex-row h-full w-full items-center justify-between overflow-hidden rounded-lg bg-gradient-to-bl from-white via-white to-red-100 dark:bg-gradient-to-r dark:from-black dark:to-black px-4 sm:px-20 pb-20 pt-8 my-10 ">
      <div className="flex flex-col text-left items-start gap-4 sm:max-w-[50%] space-y-2 ">
        <h2 className="text-sm font-semibold tracking-tighter bg-red-700 px-4 py-1 rounded-md text-white">
          Our Tech Stack
        </h2>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-100">
          Technologies we use in {title}
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed">
          We leverage the latest technologies and frameworks to build
          cutting-edge solutions. Our tech stack is carefully curated to ensure
          scalability, performance, and maintainability.
        </p>
      </div>
      <IconCloud iconSlugs={icons || slugs} />
    </div>
  );
}
