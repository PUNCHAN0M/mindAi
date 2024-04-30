import Navbar from "@/components/navbar";
import ProjectDetail from "@/components/Confirm/ProjectDetail";
import FilterBar from "@/components/FilterBar";
import ProjectDetailDashboard from "@/components/Confirm/ProjectDetailDashboard";
import Sidebar from "@/components/Sidebar";

export default function create() {
  return (
    <div className="flex flex-col bg-white w-screen h-screen relative overflow-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <div className="flex justify-between mt-[60px]">
        <Sidebar />
        <ProjectDetailDashboard />
        <FilterBar />
      </div>
    </div>
  );
}
