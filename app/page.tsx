import GradientText from "@/components/GradientText";
import SectionTitle from "../components/SectionTitle";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <div className="w-full px-10 py-5 md:py-15 overflow-hidden">
      <div className="flex justify-center">
        {/* <SectionTitle>Get to Know Me!</SectionTitle> */}
        <SectionTitle>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Get to Know Me!
          </GradientText>
        </SectionTitle>
      </div>
      <div className="my-10 px- lg:px-10">
        <p>
          I'm a QA Automation specialist and Fullstack Software Engineer who’s
          passionate about building clean, efficient systems—and making sure
          they actually work. With a strong foundation in test automation and
          hands-on experience across both frontend and backend development, I
          bridge the gap between quality and code. Outside of testing and
          coding, I’m also a Web3 enthusiast, always exploring how blockchain
          technologies are shaping the future of the web.
        </p>
        <br />
        <p>
          Feel free to download my CV below to get a quick look at my
          background, experience, and skills. Hopefully, it gives you a better
          idea of what I can bring to the table!
        </p>
        {/* <Button
          variant="ghost"
          className="border-b-red-300 border-2 text-center"
        >
          Ghost
        </Button> */}
        <div className="flex justify-center mt-10">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}
