// Define the type
export interface ServiceType {
  s_no: string;
  s_name: string;
  s_desc: string;
}

// Use that type in your data array
const Services_Data: ServiceType[] = [
  {
    s_no: "01",
    s_name: "UI/UX design",
    s_desc: "Web development is the process of building...",
  },
  {
    s_no: "02",
    s_name: "Social media",
    s_desc: "Web development is the process of building...",
  },
  {
    s_no: "03",
    s_name: "Version control",
    s_desc: "Web development is the process of building...",
  },
  {
    s_no: "04",
    s_name: "Fetching Data from APIs",
    s_desc: "Web development is the process of building...",
  },
  {
    s_no: "05",
    s_name: "Responsive Design",
    s_desc: "Web development is the process of building...",
  },
  {
    s_no: "06",
    s_name: "Animations & Transitions",
    s_desc: "Web development is the process of building...",
  },
 
];

export default Services_Data;
