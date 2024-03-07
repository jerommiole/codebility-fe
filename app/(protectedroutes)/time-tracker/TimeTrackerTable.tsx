import React from "react"
import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"

const TimeTrackerTable = () => {
  return (
    <Box>
      <H1>Time Log  </H1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Time Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(10)
            .fill(null)
            .map((value, index) => (
              <TableRow>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>11/28/23</TableCell>
                <TableCell>Jira Ticket</TableCell>
                <TableCell>12:34 P - 00:06 P</TableCell>
                <TableCell>00H 00m</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  )
}

export default TimeTrackerTable
