import { Injectable} from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapters.interface';
import axios, { AxiosInstance } from 'axios';


@Injectable()
export class AxiosAdapter implements HttpAdapter{

    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        console.log(url);
        
        try {
            const { data } = await this.axios.get<T>( url );
            return data;

        } catch (error) {
            throw new Error('This is an error - check logs');
        }

    }

}