import classes from './index.module.css'
import { Text, Title } from "@mantine/core";

interface ITitles {
  title: string;
  desc: string;
  className?: string;
}

function index({ title, desc, className }: ITitles) {
  return (
    <div className={className === undefined ? classes.titlesWrapper : className}>
      <Title order={2} mt={10}>{title}</Title>
      <Text mt={5}>
        {desc}
      </Text>
    </div>
  )
}

export default index