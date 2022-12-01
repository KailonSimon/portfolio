import Image from "next/image";
import { createStyles, Badge } from "@mantine/core";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  badge: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 11,
      height: 20,
      lineHeight: "18px",
      padding: "0 10px",
    },
    borderRadius: 4,
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  badgeLeftSection: {
    display: "flex",
    justifyContent: "center",
  },
}));

function TechBadge({ name, image, imageAlt }) {
  const { classes } = useStyles();

  return (
    <Badge
      leftSection={<Image src={image} alt={imageAlt} height={15} width={15} />}
      size="xl"
      variant="filled"
      sx={{ background: "gray" }}
      component={motion.div}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.05 }}
      classNames={{
        root: classes.badge,
        leftSection: classes.badgeLeftSection,
      }}
    >
      {name}
    </Badge>
  );
}

export default TechBadge;
