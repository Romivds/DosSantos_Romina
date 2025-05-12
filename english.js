// Definición del objeto que representa el perfil profesional
let devProfile = {
    fullName: "Romina Dos Santos",
    age: 35,
    profession: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isEmployed: true,
    contact: {
        email: "rodossantosro@gmail.com",
        location: "Posadas"
    }
};

// Función para generar la presentación en inglés
function introduceProfile(profile) {
    let employmentStatus = profile.isEmployed ? "I am currently employed." : "I am currently looking for opportunities.";
    return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${profile.skills.join(", ")}. I live in ${profile.contact.location}. I am ${profile.age} years old. ${employmentStatus}`;
}

// Ejemplo de uso
console.log(introduceProfile(devProfile));