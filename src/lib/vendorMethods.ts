import { cookieShop } from "@drizzle/schema";
import { db } from "./db";

export const getAllVendorNameAndIds = async () => {
    return db.select({
        vendorId: cookieShop.vendorId,
        vendorName: cookieShop.vendorName,
    }).from(cookieShop);
}