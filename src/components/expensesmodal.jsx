"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, SquarePlus, Trash2, X } from "lucide-react"

export function ExpensesModal({ title = "ADD NEW EXPENSES", trigger = "Add New Expenses" }) {
  const [payee, setPayee] = useState("")
  const [paymentAccount, setPaymentAccount] = useState("")
  const [paymentDate, setPaymentDate] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [includeInventory, setIncludeInventory] = useState(false)
  const [memo, setMemo] = useState("")
  const [productImage, setProductImage] = useState(null)
  const [receipt, setReceipt] = useState(null)

  const [lineItems, setLineItems] = useState([
    {
      id: 1,
      productService: "Cat6 Ethernet cable",
      description: "100 meters of Cat6 Ethernet cable",
      qty: 1,
      rate: 14500.0,
      amount: 14500.0,
      tax: 0,
    },
    {
      id: 2,
      productService: "MX65W Wireless AP",
      description: "Cisco Meraki wireless AP for indoor use",
      qty: 2,
      rate: 24998.0,
      amount: 49996.0,
      tax: 0,
    },
  ])

  const addLineItem = () => {
    const newItem = {
      id: lineItems.length + 1,
      productService: "",
      description: "",
      qty: 1,
      rate: 0,
      amount: 0,
      tax: 0,
    }
    setLineItems([...lineItems, newItem])
  }

  const removeLineItem = (id) => {
    setLineItems(lineItems.filter((item) => item.id !== id))
  }

  const updateLineItem = (id, field, value) => {
    setLineItems(
      lineItems.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value }
          if (field === "qty" || field === "rate") {
            updated.amount = updated.qty * updated.rate
          }
          return updated
        }
        return item
      }),
    )
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0)
  const salesTax = 0 
  const expenseTotal = subtotal + salesTax

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <DialogTitle className="text-lg font-semibold text-blue-600">{title}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Please fill out the details below to create a new transaction.
            </DialogDescription>
          </div>
          
        </DialogHeader>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="payee" className="text-sm font-medium">
                Payee
              </Label>
              <Input
                id="payee"
                placeholder="Who did you pay?"
                value={payee}
                onChange={(e) => setPayee(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="payment-account" className="text-sm font-medium">
                Payment Account
              </Label>
              <Input
                id="payment-account"
                placeholder="What account did you use?"
                value={paymentAccount}
                onChange={(e) => setPaymentAccount(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="payment-date" className="text-sm font-medium">
                Payment Date
              </Label>
              <div className="relative mt-1">
                <Input
                  id="payment-date"
                  type="date"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  className="pr-10"
                />
                <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div>
              <Label htmlFor="payment-method" className="text-sm font-medium">
                Payment Method
              </Label>
              <Input
                id="payment-method"
                placeholder="What did you pay with?"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          
          <div className="flex items-center space-x-2">
            <Checkbox id="include-inventory" checked={includeInventory} onCheckedChange={setIncludeInventory} />
            <Label htmlFor="include-inventory" className="text-sm">
              Include in inventory
            </Label>
          </div>

          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">#</th>
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">Product/Service</th>
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">Description</th>
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">Qty</th>
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">Rate</th>
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">Tax</th>
                    <th className="text-left p-2 text-sm font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-2 text-sm">{item.id}</td>
                      <td className="p-2">
                        <Select
                          value={item.productService}
                          onValueChange={(value) => updateLineItem(item.id, "productService", value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Cat6 Ethernet cable">Cat6 Ethernet cable</SelectItem>
                            <SelectItem value="MX65W Wireless AP">MX65W Wireless AP</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="p-2">
                        <Input
                          value={item.description}
                          onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                          className="w-full"
                        />
                      </td>
                      <td className="p-2">
                        <Input
                          type="number"
                          value={item.qty}
                          onChange={(e) => updateLineItem(item.id, "qty", Number(e.target.value))}
                          className="w-20"
                        />
                      </td>
                      <td className="p-2">
                        <Input
                          type="number"
                          value={item.rate}
                          onChange={(e) => updateLineItem(item.id, "rate", Number(e.target.value))}
                          className="w-24"
                        />
                      </td>
                      <td className="p-2 text-sm">₱{item.amount.toLocaleString()}</td>
                      <td className="p-2 text-sm">₱{item.tax.toLocaleString()}</td>
                      <td className="p-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeLineItem(item.id)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Button type="button" variant="outline" onClick={addLineItem} className="w-full sm:w-auto bg-transparent">
              Add Product or Services
            </Button>
          </div>

          
          <div>
            <Label htmlFor="memo" className="text-sm font-medium">
              Memo
            </Label>
            <Textarea
              id="memo"
              placeholder="Brief Description of Purchase"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="product-image" className="text-sm font-medium">
                Product Image
              </Label>
              <div className="mt-1">
                <Input
                  id="product-image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProductImage(e.target.files?.[0] || null)}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/80"
                />
                {!productImage && <p className="text-xs text-muted-foreground mt-1">No file chosen</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="receipt" className="text-sm font-medium">
                Receipt
              </Label>
              <div className="mt-1">
                <Input
                  id="receipt"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setReceipt(e.target.files?.[0] || null)}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/80"
                />
                {receipt && <p className="text-xs text-muted-foreground mt-1">{receipt.name}</p>}
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₱ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Sales Tax</span>
                  <span>₱ {salesTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Expense Total</span>
                  <span>₱ {expenseTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col-reverse sm:flex-row justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                Save
              </Button>
            </DialogClose>
            <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              Review and Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
