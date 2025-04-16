import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
} from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

/**
 * @typedef {Object} Experience
 * @property {string} title
 * @property {string} company
 * @property {string[]} badges
 * @property {string} period
 * @property {string} location
 * @property {string[]} description
 */

/**
 * Helper function to calculate duration in months
 * @param {string} period
 * @returns {string}
 */
const calculateDurationInMonths = (period) => {
  if (period.includes("Present")) {
    return "1 mo"; // Default for current positions
  }
  
  const parts = period.split("-");
  if (parts.length !== 2) return "N/A";
  
  const startYear = parseInt(parts[0].trim());
  const endYear = parseInt(parts[1].trim());
  
  if (isNaN(startYear) || isNaN(endYear)) return "N/A";
  
  const durationInYears = endYear - startYear;
  return `${durationInYears * 12} mo`; // Approximate - assumes full years
};

/**
 * Group experiences by company
 * @param {Experience[]} experiences
 * @returns {Array}
 */
const groupExperiencesByCompany = (experiences) => {
  const grouped = {};

  experiences.forEach((exp) => {
    if (!grouped[exp.company]) {
      grouped[exp.company] = [];
    }
    grouped[exp.company].push(exp);
  });

  return Object.entries(grouped).map(([company, exps]) => ({
    company,
    location: exps[0].location.split(",")[1]?.trim() || exps[0].location,
    experiences: exps.sort((a, b) => {
      // Sort by period (most recent first)
      const aYear = parseInt(a.period.split("-")[0].trim());
      const bYear = parseInt(b.period.split("-")[0].trim());
      return bYear - aYear;
    }),
  }));
};

export default function ExperienceCard() {
  const experiences = [
    {
      title: "Research Assistant",
      company: "HCMC University of Technology and Education",
      badges: ["Deep Learning", "Data Science"],
      period: "2024 - Present",
      location: "Hybrid",
      description: [
        "• Helped develop an advanced method to classify malware families using deep learning techniques.",
        "• Collected and processed data for cybersecurity analysis.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "HCMC University of Technology and Education",
      badges: ["Discrete Math", "Programming Basics"],
      period: "2023 - 2024",
      location: "HCMC, Vietnam",
      description: [
        "• Graded assignments and exams across multiple courses, ensuring consistent and fair evaluation standards.",
        "• Managed administrative tasks, maintaining accurate student records and preparing grade reports.",
      ],
    },
  ];

  const groupedExperiences = groupExperiencesByCompany(experiences);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  return (
    <div className="space-y-6 mt-4">
      {groupedExperiences.map((group, groupIndex) => (
        <motion.div
          key={groupIndex}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2 * groupIndex,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <Card>
            <CardContent className="pb-2 pt-6 ">
              {/* Company header */}
              <div className="flex items-start gap-4 mb-4">
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{group.company}</h3>
                </div>
              </div>

              {/* Roles at this company */}
              <div className="ml-6 relative w-full">
                {group.experiences.map((experience, expIndex) => (
                  <div key={expIndex} className="relative">
                    {/* Timeline connector */}
                    {expIndex < group.experiences.length - 1 && (
                      <div className="absolute left-[6px] top-[24px] w-[2px] h-[calc(100%)] bg-gray-200 dark:bg-gray-700"></div>
                    )}

                    <div className="flex mb-6">
                      {/* Timeline dot */}
                      <div className="relative">
                        <div className="w-[14px] h-[14px] rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-4"></div>
                      </div>

                      {/* Role content */}
                      <div className="flex-1">
                        <Card className="shadow-none border-0">
                          <CardContent className="p-0">
                            <div className="flex flex-col pt-0 md:flex-row md:items-start justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                  {experience.period} · {calculateDurationInMonths(experience.period)}
                                </p>

                                <motion.div variants={containerVariants} className="mt-2 flex flex-wrap gap-2">
                                  {experience.badges.map((badge, badgeIndex) => (
                                    <motion.div
                                      key={badgeIndex}
                                      variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: {
                                          opacity: 1,
                                          scale: 1,
                                          transition: { delay: 0.3 + badgeIndex * 0.1, duration: 0.3 },
                                        },
                                      }}
                                    >
                                      <Badge variant="default">{badge}</Badge>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </div>
                              
                              {/* Location on the right side */}
                              <div className="hidden md:block text-right min-w-[100px]">
                                <p className="font-medium text-gray-900 dark:text-white">{experience.period}</p>
                                <p className="text-gray-500 dark:text-gray-400">{experience.location}</p>
                              </div>
                            </div>
                            
                            <motion.div variants={containerVariants} className="mt-3">
                              <div className="flex flex-col gap-2">
                                {experience.description.map((desc, descIndex) => (
                                  <motion.p
                                    key={descIndex}
                                    variants={{
                                      hidden: { opacity: 0, y: 10 },
                                      visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.4 + descIndex * 0.1, duration: 0.3 },
                                      },
                                    }}
                                    className="text-gray-700 dark:text-gray-300"
                                  >
                                    {desc}
                                  </motion.p>
                                ))}
                              </div>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}