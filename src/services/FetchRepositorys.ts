import axios from "axios";

const Github_Api_url = "https://api.github.com";

export const GetUserProfile = async (username: string) => {
    const response = await axios.get(`${Github_Api_url}/users/${username}`);
    if(response.status === 200) {
        return response.data;
    } else {
        return null;
    }
}

export const GetUsersRepositories = async (username: string) => {
    const response = await axios.get(`${Github_Api_url}/search/repositories`, {
        params: {
            q: `user:${username} language:Dart`,
            sort: "updated",
            order: "desc",
            per_page: 100,
        },
    });
    if(response.status === 200) {
        return response.data.items.filter(
            (repository: { language: string | null }) => repository.language === "Dart",
        );
    } else {
        return null;
    }
}