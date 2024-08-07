import { BsFillFilePostFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

const communityFeatures = () => {
  return (
    <section className="bg-white ">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#058f1a] ">Join Our Vibrant Farming Community</h2>
      <p className="text-gray-500 text-[14px] ">Our app's community section is designed to connect farmers and agriculture enthusiasts from all over. Engage with fellow users, share experiences, and access valuable insights and support. Whether you’re looking to discuss best practices, seek advice, or collaborate on innovative solutions, our community is here to foster connections and drive progress in agriculture.</p>
    </div>
    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <BsFillFilePostFill className="h-10 w-10 text-[#058f1a]" />
        </div>
        <h3 className="mb-2 text-xl font-bold ">Explore All Posts </h3>
        <p className="text-gray-500 ">Discover a wealth of information and updates by browsing through posts from other community members. Stay informed about the latest trends, tips, and discussions in agriculture. Our platform allows you to easily find relevant content and gain valuable insights from the collective knowledge of the community</p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <FaRegComment className="h-10 w-10 text-[#058f1a]" />

        </div>
        <h3 className="mb-2 text-xl font-bold e">You Can Comment</h3>
        <p className="text-gray-500 ">Engage directly with posts by commenting and participating in discussions. Offer your thoughts, ask questions, or provide feedback on topics that interest you. This interactive feature helps build connections, facilitates knowledge sharing, and enhances the collaborative spirit within the community.</p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <IoMdAddCircleOutline className="h-10 w-10 text-[#058f1a]" />

        </div>
        <h3 className="mb-2 text-xl font-bold e">You Can Post</h3>
        <p className="text-gray-500 ">Share your own experiences, questions, and expertise with the community. Whether you have insights on crop management, farming techniques, or industry news, posting in the community section lets you contribute to the conversation and help others while also getting feedback and support from fellow users.</p>
      </div>

    </div>
  </div>
</section>
  )
}

export default communityFeatures