import config from '../config/config';
import {Client, Storage, Databases, Query, ID} from 'appwrite';

export class Service{
    client = new Client();
    storage;
    databases;

    constructor(){
        this.client
            .setEndpoint(config.appWriteURL)
            .setProject(config.projectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        // eslint-disable-next-line no-useless-catch
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            return false;
        }
    }

    async getPost(slug){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status","equal")]){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries
            )
        } catch (error) {
            throw error;
        }
    }

    async uploadFile(file){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        // eslint-disable-next-line no-useless-catch
        try {
            await this.databases.deleteFile(
                config.appWriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getFilePreview(fileId){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.getFilePreview(
                config.appWriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }
}

const service = new Service();

export default service;