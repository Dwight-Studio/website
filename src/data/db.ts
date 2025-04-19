"use server"

import postgres, {Row} from "postgres";

const sql = postgres({
    host: process.env.POSTGRES_HOST ?? "localhost",
    user: process.env.POSTGRES_USER ?? "postgres",
    password: process.env.POSTGRES_PASSWORD ?? "admin",
    database: process.env.POSTGRES_DB ?? "postgres",
    port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
})

export async function fetchTranslations(locale: string) {
    "use cache"

    let messages = new Map<string, string>();

    try {
        let result = await sql`SELECT *
                               FROM translations
                               WHERE locale = ${locale}`;

        for (let i in result) {
            let row = result[i];
            messages.set(row.key, row.message);
        }
    } catch (error) {
        console.log(error);
    }

    return messages;
}

export async function fetchMembers(): Promise<Row[]> {
    "use cache"

    try {
        return await sql`
            SELECT *
            FROM members
        `;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function fetchMember(memberId: string): Promise<Row[]> {
    "use cache"

    try {
        return await sql`
            SELECT *
            FROM members
            WHERE id = ${memberId}
        `
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function fetchContributedProjects(memberId: string): Promise<Row[]> {
    "use cache"

    try {
        return await sql`
            SELECT *
            FROM projects
                     JOIN contributions ON projects.id = contributions.project_id
            WHERE contributions.member_id = ${memberId}
        `
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function fetchProjects(): Promise<Row[]> {
    "use cache"

    try {
        return await sql`
            SELECT *
            FROM projects
        `
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function fetchProject(projectId: string): Promise<Row[]> {
    "use cache"

    try {
        return await sql`
            SELECT *
            FROM projects
            WHERE id = ${projectId}
        `
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function fetchContributors(projectId: string): Promise<Row[]> {
    "use cache"

    try {
        return await sql`
            SELECT *
            FROM members
                     JOIN contributions ON members.id = contributions.member_id
            WHERE contributions.project_id = ${projectId}
        `
    } catch (error) {
        console.log(error);
        return [];
    }
}