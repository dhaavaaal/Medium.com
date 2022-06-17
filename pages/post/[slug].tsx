import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
// We need to go and tell NextJS, how it knows which posts exists, how does
//it know which page to go ahead and pre-build these pages. We can't just
//magically guess it's gonna know it and not by doing Server Side Rendering(SSR)
//So how? :- Here comes to the escape getStaticPaths.
//This is gonna allow NextJS to know which routes it should pre-build in
//advance

const Post = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {};
