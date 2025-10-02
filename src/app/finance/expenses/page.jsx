import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/sidebar"
import { Eye, Edit, Trash2, UserSearch } from "lucide-react"
import { ExpensesModal } from "@/components/expensesmodal" 

export default function ExpensesPage() {
  const expenses = [
    {
      id: 1,
      date: "10/27/2024",
      paymentMode: "Credit Card",
      number: "1",
      payee: "Ace Gabriel P.",
      memo: "Electricity bill for office",
      category: "Bills",
      total: "₱34,298.50",
    },
    {
      id: 2,
      date: "10/27/2024",
      paymentMode: "Cash",
      number: "2",
      payee: "Justin Egonia",
      memo: "Trello subscription for team",
      category: "License",
      total: "₱12,298.50",
    },
  ]

  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input placeholder="Search" />
          <Button type="submit" variant="outline">
            <UserSearch className="w-4 h-4" />
          </Button>
        </div>

        
        <div className="flex items-center gap-2">
          
          <ExpensesModal />
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-6">
        Expenses ({expenses.length})
      </h1>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[100px]">
                    Date
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[140px]">
                    Mode of Payment
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[60px]">
                    No.
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[160px]">
                    Payee
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[200px]">
                    Memo
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[120px]">
                    Category
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[120px]">
                    Total
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground min-w-[100px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr
                    key={expense.id}
                    className="border-b hover:bg-muted/30"
                  >
                    <td className="p-4">{expense.date}</td>
                    <td className="p-4">{expense.paymentMode}</td>
                    <td className="p-4">{expense.number}</td>
                    <td className="p-4">{expense.payee}</td>
                    <td className="p-4">{expense.memo}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        {expense.category}
                      </span>
                    </td>
                    <td className="p-4 font-medium">{expense.total}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="p-1 hover:bg-muted rounded"
                        >
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button
                          type="button"
                          className="p-1 hover:bg-muted rounded"
                        >
                          <Edit className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button
                          type="button"
                          className="p-1 hover:bg-muted rounded"
                        >
                          <Trash2 className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
