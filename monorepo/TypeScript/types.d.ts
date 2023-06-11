interface Interns {
    name: string,
    age: number,
    skills: "React" | "HTML" | "JS" | "TypeScrpit"
}

export const enum Domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend"
}

interface Juniors {
    name: string,
    age: number,
    skills: "React" | "HTML" | "JS" | "TypeScrpit",
    date_of_promotion: Date,
    domain: Domain
}

interface Company {
    interns: Interns[],
    juniors: Juniors[],
    country: string
}

export default Company;