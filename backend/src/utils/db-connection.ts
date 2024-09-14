// getting-started.js
import mongoose from "mongoose";
import config from "../config";


async function main() {
    try {
        
  await mongoose.connect(config.dbUrl as string,{
    dbName:'Online Marketplace'
  });
    }catch(err : any){
        throw new Error(err.message)
    }

}
export default main