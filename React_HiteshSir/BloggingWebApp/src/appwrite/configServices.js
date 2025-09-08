import config from "../config/config.js";
import { Client, ID ,Databases , Storage , Query} from "appwrite";

export class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}) {
        try {
          return await this.Databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug, //or, you can use ID.unique(),
            { title,content,featuredImage,status,userId }
          )
        } catch (error) {
          console.log("Apprite service :: createPost :: error", error);
          
        }
          
}
    async updatePost (slug,{title,content,featuredImage,status}) {
        try {
          return await this.Databases.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            { title,content,featuredImage,status }
          )
        }
          
          catch (error) {
            console.log("Apprite service :: updatePost :: error", error);
          }
    }
    async deletePost (slug) {
        try {
          await this.Databases.deleteDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
          )
          return true;
        } catch (error) {
          console.log("Apprite service :: deletePost :: error", error);
          return false;
        }
      }

      async getPost(slug) {
        try {
          return await this.Databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
          )
        } catch (error) {
          console.log("Apprite service :: getPosts :: error", error);
        }
      }
      async getPosts(queries=[Query.equal("status","active")]){
        try {
          return await this.Databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            queries
          )
        } catch (error) {
          console.log("Apprite service :: getPosts :: error", error);
        }
      }
      //file upload services

      async uploadFile(file){
        try {
          return await this.bucket.createFile(
            config.appwriteBucketId,
            ID.unique(),
            file
          )
        } catch (error) {
          console.log("Apprite service :: uploadFile :: error", error);
          return false;
        }
  }
      async deleteFile(fileId){
        try {
          await this.bucket.deleteFile(config.appwriteBucketId,fileId)
          return true;
        } catch (error) {
          console.log("Apprite service :: getFilePreview :: error", error);
          return false;
        }
      }
      async getFilePreview(fileId){
        try {
          return await this.bucket.getFilePreview(config.appwriteBucketId,fileId)
        } catch (error) {
          console.log("Apprite service :: getFilePreview :: error", error);
          return false;
        }

}
      

const service = new Service();

export default service;