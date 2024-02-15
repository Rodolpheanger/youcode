import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/typography";
import { getRequiredAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export type CoursesProps = {
  params: {
    username: string;
  };
};

export default async function Courses() {
  const session = await getRequiredAuthSession();

  const courses = await prisma.course.findMany({
    where: {
      creatorId: session.user.id,
    },
  });

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Cours</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card>
          <CardContent className="mt-4">
            <Table>
              <TableHeader>
                <TableHead className="w-1/6">Image</TableHead>
                <TableHead>Cours</TableHead>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      {course.image ? (
                        <Image
                          src={course.image}
                          alt={course.name}
                          width={40}
                          height={40}
                        />
                      ) : (
                        <Avatar>
                          <AvatarFallback>{course.name[0]}</AvatarFallback>{" "}
                        </Avatar>
                      )}
                    </TableCell>
                    <TableCell>
                      <Typography
                        as={Link}
                        variant="large"
                        href={`/admin/courses/${course.id}`}
                      >
                        {course.name}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
