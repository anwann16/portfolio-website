import SectionTitle from "@/components/SectionTitle";
import PageContainer from "@/components/PageContainer";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <PageContainer>
      <SectionTitle>Get to Know Me!</SectionTitle>
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
        <div className="flex justify-center mt-10">
          <DownloadButton />
        </div>
      </div>
    </PageContainer>
  );
}
