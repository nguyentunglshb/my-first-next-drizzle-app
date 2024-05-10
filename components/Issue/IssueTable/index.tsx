"use client";

import { Badge } from "@/components/ui/Badge";
import { Task } from "@/types/tracker";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const data: Array<Task> = [
  {
    id: 521,
    tracker: "Task",
    status: "Resolve",
    priority: "Urgent",
    subject: "Customization possibilities",
    assignee: "Allie",
    updated: "13-11-2019 19:17",
    due_date: "31-08-2017",
    progress: 50,
  },
  {
    id: 519,
    tracker: "Feature",
    status: "New",
    priority: "Low",
    subject: "Home page",
    assignee: "Bill",
    updated: "13-11-2018 19:17",
    due_date: "",
    progress: 0,
  },
  {
    id: 509,
    tracker: "Bug",
    status: "In Progress",
    priority: "Normal",
    subject: "Favicon",
    assignee: "Pierce",
    updated: "13-11-2019 19:17",
    due_date: "31-08-2017",
    progress: 80,
  },
];

const columnHelper = createColumnHelper<Task>();

const defaultColumns = [
  columnHelper.display({
    id: "actions",
    cell: (props) => <p>{props.row.index + 1}</p>,
  }),

  columnHelper.accessor("id", {
    header: () => <span>#</span>,
  }),

  columnHelper.accessor("tracker", {
    header: "Tracker",
    cell: (props) => {
      const tracker = props.getValue();
      const variant =
        tracker === "Bug"
          ? "destructive"
          : tracker === "Task"
          ? "secondary"
          : "default";

      return <Badge variant={variant}>{tracker}</Badge>;
    },
  }),

  columnHelper.accessor("status", {
    header: "Status",
  }),

  columnHelper.accessor("priority", {
    header: "Priority",
  }),

  columnHelper.accessor("subject", {
    header: "Subject",
  }),

  columnHelper.accessor("assignee", {
    header: "Assignee",
  }),

  columnHelper.accessor("updated", {
    header: "Updated",
  }),

  columnHelper.accessor("due_date", {
    header: "Due date",
  }),
];

const IssueTable = () => {
  const table = useReactTable({
    data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(
                (
                  header // map over the headerGroup headers array
                ) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                )
              )}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row._getAllVisibleCells().map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="text-center border border-gray-500"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IssueTable;
