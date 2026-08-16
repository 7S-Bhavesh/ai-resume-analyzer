import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
// import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume mind" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const {  auth } = usePuterStore();
const navigate = useNavigate();

useEffect(() => {
  if (!auth.isAuthenticated) navigate("/auth?next=/");
}, [auth.isAuthenticated]);
    
  
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your resume applications and ratings </h1>
          <h2>Review your submission</h2>
        </div>

      {resumes.length > 0 && (
        <div className="resume-sections">
          {resumes.map((resume) => (
            <div key={resume.id}>
              <ResumeCard resume={resume} />
            </div>
          ))}
        </div>
      )}
      </section>
    </main>
  );
}
