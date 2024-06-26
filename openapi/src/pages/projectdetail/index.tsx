import Navbar from "@/components/navbar";
import ProjectDetail from "@/components/Confirm/ProjectDetail";
import Sidebar from "@/components/Sidebar";
import ProcessBar2 from "@/components/ProcessBar2";

export default function create() {
  return (
    <div className="flex flex-col bg-white w-screen h-screen overflow-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <Sidebar/>
      <Navbar />
      <ProcessBar2/>
      <ProjectDetail/>
    </div>
  );
}
