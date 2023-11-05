import { ApiService } from "./api.service";

export const services = {
    api: new ApiService(process.env.REACT_APP_API || 'http://localhost:3000/dev'),
};
