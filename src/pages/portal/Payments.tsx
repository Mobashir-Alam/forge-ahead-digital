import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { DollarSign } from "lucide-react";

const payments = [
  { id: "INV-001", desc: "Project deposit", amount: "$2,500", date: "Feb 20, 2026", status: "Paid" },
  { id: "INV-002", desc: "Design milestone", amount: "$2,500", date: "Mar 1, 2026", status: "Paid" },
  { id: "INV-003", desc: "Development milestone", amount: "$2,500", date: "Mar 15, 2026", status: "Paid" },
  { id: "INV-004", desc: "Final delivery", amount: "$2,500", date: "Mar 30, 2026", status: "Pending" },
];

export default function Payments() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-display font-bold">Payments</h2>
        <p className="text-muted-foreground text-sm">Your payment history and summary</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Total", value: "$10,000", color: "text-foreground" },
          { label: "Paid", value: "$7,500", color: "text-green-600" },
          { label: "Pending", value: "$2,500", color: "text-amber-600" },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-5 text-center">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className={`text-2xl font-display font-bold mt-1 ${item.color}`}>{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.id}</TableCell>
                  <TableCell>{p.desc}</TableCell>
                  <TableCell className="font-semibold">{p.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{p.date}</TableCell>
                  <TableCell>
                    <Badge className={`border-0 text-xs ${p.status === "Paid" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {p.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
