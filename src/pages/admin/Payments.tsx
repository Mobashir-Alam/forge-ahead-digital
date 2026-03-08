import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Check, Clock } from "lucide-react";

const payments = [
  { client: "Acme Corp", project: "E-commerce Redesign", amount: "$5,000", status: "Paid", date: "Mar 1, 2026" },
  { client: "TechStart Inc", project: "SaaS Dashboard", amount: "$3,000", status: "Paid", date: "Feb 25, 2026" },
  { client: "Bella Cucina", project: "Restaurant Website", amount: "$2,500", status: "Pending", date: "Mar 15, 2026" },
  { client: "GreenLeaf Studios", project: "Portfolio Site", amount: "$1,500", status: "Pending", date: "Mar 20, 2026" },
  { client: "Acme Corp", project: "E-commerce Redesign", amount: "$5,000", status: "Pending", date: "Apr 1, 2026" },
];

const totalPaid = 8000;
const totalPending = 9000;

export default function AdminPayments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold">Payments</h2>
          <p className="text-muted-foreground text-sm">Track all payments</p>
        </div>
        <Button variant="hero" size="sm"><Plus className="h-4 w-4 mr-2" /> Add Payment</Button>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card><CardContent className="p-5 text-center"><p className="text-sm text-muted-foreground">Total</p><p className="text-2xl font-display font-bold mt-1">${(totalPaid + totalPending).toLocaleString()}</p></CardContent></Card>
        <Card><CardContent className="p-5 text-center"><p className="text-sm text-muted-foreground">Paid</p><p className="text-2xl font-display font-bold mt-1 text-green-600">${totalPaid.toLocaleString()}</p></CardContent></Card>
        <Card><CardContent className="p-5 text-center"><p className="text-sm text-muted-foreground">Pending</p><p className="text-2xl font-display font-bold mt-1 text-amber-600">${totalPending.toLocaleString()}</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((p, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{p.client}</TableCell>
                  <TableCell className="text-muted-foreground">{p.project}</TableCell>
                  <TableCell className="font-semibold">{p.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{p.date}</TableCell>
                  <TableCell>
                    <Badge className={`border-0 text-xs ${p.status === "Paid" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" title="Mark Paid"><Check className="h-4 w-4 text-green-600" /></Button>
                      <Button variant="ghost" size="sm" title="Mark Pending"><Clock className="h-4 w-4 text-amber-600" /></Button>
                    </div>
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
