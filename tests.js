import { allocate, salesOrders, purchaseOrders } from "./sales_orders.js";


describe('allocate', () => {
    test('return an array', () => {
            expect(allocate(salesOrders,purchaseOrders).toBe(['2020-01-04', 'S1']))
        })
})
