import PreviewBlog from "@/components/PreviewBlog";
import SectionTitle from "@/components/SectionTitle";
import PageContainer from "@/components/PageContainer";

const BlogPage = () => {
  return (
    <PageContainer>
      <SectionTitle>My Blog</SectionTitle>
      <PreviewBlog />
    </PageContainer>
  );
};

export default BlogPage;
