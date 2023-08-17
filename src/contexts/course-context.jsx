import { createContext, useState } from "react";

export const CourseContext = createContext();

const CourseProvider = (props) => {
  const [courseDetail, setCourseDetail] = useState({
    id: "",
  });

  return (
    <CourseContext.Provider value={[courseDetail, setCourseDetail]}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
