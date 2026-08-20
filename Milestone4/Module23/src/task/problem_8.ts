interface General {
  name: string;
  age: number;
  type: "general";
}

interface Emergency {
  name: string;
  age: number;
  type: "emergency";
  emergencyLevel: 1 | 2 | 3;
}

const getPatientStatus = (patient: General | Emergency): string => {
  if (patient.type === "general") {
    return "General Patient";
  } else if (patient.type === "emergency") {
    if (patient.emergencyLevel === 1) {
      return "Critical patient";
    } else if (patient.emergencyLevel === 2) {
      return "Serious patient";
    }
  }
  return "Moderate patient";
};

console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));

console.log(
  getPatientStatus({
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1,
  }),
);
