"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, X } from "lucide-react"

export function PurchaseOrderModal({ trigger = "New Purchase Order" }) {
  const [vendor, setVendor] = useState("GHI Safety")
  const [purchaseDate, setPurchaseDate] = useState("11/06/2024")
  const [specialInstructions, setSpecialInstructions] = useState("")
  const [vendorNotes, setVendorNotes] = useState("Please provide a detailed invoice with each shipment")

  const [lineItems, setLineItems] = useState([
    {
      id: 1,
      productService: "Face Masks",
      description: "Used to protect the wearer from viruses",
      qty: 15,
      rate: 95.0,
      amount: 1425.0,
      tax: 0,
    },
    {
      id: 2,
      productService: "Gloves",
      description: "PPE that can protect the wearer's hands",
      qty: 10,
      rate: 120.5,
      amount: 1200.0,
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
  const invoiceTotal = subtotal + salesTax

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-start justify-between border-b pb-4">
          <div className="space-y-2">
            <DialogTitle className="text-lg font-semibold text-blue-600">NEW PURCHASE ORDER</DialogTitle>
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="font-medium">One Stop Creative Solution & Services INC.</div>
              <div>onestopcreatievesolution@gmail.com</div>
              <div>619 Gastambide Street</div>
              <div>Sampaloc Manila, 1008</div>
            </div>
          </div>
        </DialogHeader>

        <form className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">PO001</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">Vendor</Label>
                <Select value={vendor} onValueChange={setVendor}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GHI Safety">GHI Safety</SelectItem>
                    <SelectItem value="ABC Supplies">ABC Supplies</SelectItem>
                    <SelectItem value="XYZ Corp">XYZ Corp</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-muted-foreground mt-1">123 Oak Street Anytown, CA 12345</div>
                <button className="text-blue-600 hover:underline text-xs mt-1">Edit vendor</button>
              </div>

              <div>
                <Label className="text-sm font-medium">Purchase Order date</Label>
                <Input
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left p-3 text-sm font-medium">#</th>
                    <th className="text-left p-3 text-sm font-medium">Product/Service</th>
                    <th className="text-left p-3 text-sm font-medium">Description</th>
                    <th className="text-left p-3 text-sm font-medium">Qty</th>
                    <th className="text-left p-3 text-sm font-medium">Rate</th>
                    <th className="text-left p-3 text-sm font-medium">Amount</th>
                    <th className="text-left p-3 text-sm font-medium">Tax</th>
                    <th className="text-left p-3 text-sm font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3 text-sm">{item.id}</td>
                      <td className="p-3">
                        <Select
                          value={item.productService}
                          onValueChange={(value) => updateLineItem(item.id, "productService", value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Face Masks">Face Masks</SelectItem>
                            <SelectItem value="Gloves">Gloves</SelectItem>
                            <SelectItem value="Safety Goggles">Safety Goggles</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="p-3">
                        <Input
                          value={item.description}
                          onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                          className="w-full"
                        />
                      </td>
                      <td className="p-3">
                        <Input
                          type="number"
                          value={item.qty}
                          onChange={(e) => updateLineItem(item.id, "qty", Number(e.target.value))}
                          className="w-20"
                        />
                      </td>
                      <td className="p-3">
                        <Input
                          type="number"
                          step="0.01"
                          value={item.rate}
                          onChange={(e) => updateLineItem(item.id, "rate", Number(e.target.value))}
                          className="w-24"
                        />
                      </td>
                      <td className="p-3 text-sm">₱{item.amount.toFixed(2)}</td>
                      <td className="p-3 text-sm">₱{item.tax.toFixed(2)}</td>
                      <td className="p-3">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium">Comment or Special Instructions</Label>
              <Textarea
                placeholder="Add any specific requests or instructions here"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="mt-1"
                rows={4}
              />
            </div>

            <div>
              <Label className="text-sm font-medium">Note to vendors</Label>
              <Textarea
                value={vendorNotes}
                onChange={(e) => setVendorNotes(e.target.value)}
                className="mt-1"
                rows={4}
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₱ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Sales Tax</span>
                  <span>₱ {salesTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Invoice Total</span>
                  <span>₱ {invoiceTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 pt-4">
            <DialogClose asChild>
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                Save
              </Button>
            </DialogClose>
            <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              Review and Send
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
