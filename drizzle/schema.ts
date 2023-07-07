import { mysqlTable, mysqlSchema, AnyMySqlColumn, int, varchar, index, foreignKey, decimal } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const cookieShop = mysqlTable("cookie_shop", {
	vendorId: int("vendor_id").autoincrement().primaryKey().notNull(),
	vendorName: varchar("vendor_name", { length: 100 }).notNull(),
	vendorEmail: varchar("vendor_email", { length: 100 }),
	vendorPhone: varchar("vendor_phone", { length: 20 }),
	vendorAddress: varchar("vendor_address", { length: 200 }),
});

export const products = mysqlTable("products", {
	productId: int("product_id").autoincrement().primaryKey().notNull(),
	vendorId: int("vendor_id").references(() => cookieShop.vendorId),
	productName: varchar("product_name", { length: 50 }),
	price: decimal("price", { precision: 10, scale: 2 }),
	quantity: int("quantity"),
},
(table) => {
	return {
		vendorId: index("vendor_id").on(table.vendorId),
	}
});