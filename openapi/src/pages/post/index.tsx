import Navbar from "@/components/navbar";
import ProjectDetail from "@/components/Confirm/ProjectDetail";
import FilterBar from "@/components/FilterBar";
import Sidebar from "@/components/Sidebar";
import PostDetails from "@/components/Confirm/PostDetails";
export default function create() {
  return (
    <div className="flex flex-col bg-white w-screen h-screen overflow-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Sidebar />

      <div className="flex justify-between mt-[60px]">
        <PostDetails />
      </div>
    </div>
  );
}
