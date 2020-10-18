import { getAllPostsIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/Date";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <>
      <Head>{postData.title}</Head>
      <h1>{postData.title}</h1>
      <h2>
        <Date dateString={postData.date} />
      </h2>

      <section className="blog-block">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>

      <div className="back-btn">
        <Link href="/Updates" passHref>
          <a href="/Updates">
            <Button variant="danger" className="return-btn">
              Back to updates
            </Button>
          </a>
        </Link>
      </div>
      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}