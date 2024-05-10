"use client";

import React, { FC, useMemo, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { type AnimationProps, motion } from "framer-motion";

import IconArrowNarrowRight from "@/components/Icons/Logos/IconArrowNarrowWhite";
import IconPause from "@/components/Icons/Logos/IconPause";
import IconPlay from "@/components/Icons/Logos/IconPlay";
import IconMenu from "@/components/Icons/Logos/IconMenu";
import IconPlus from "@/components/Icons/Logos/IconPlus";
import IconStop from "@/components/Icons/Logos/IconStop";

import { useToast } from "@/components/ui/Toast/use-toast";
import styles from "./index.module.css";
import IconSuccess from "@/components/Icons/Logos/IconSuccess";

interface FixedTopTimerProps {}

const FixedTopTimer: FC<FixedTopTimerProps> = ({}) => {
  const [displayTrackingContainer, setDisplayTrackingContainer] =
    useState(true);

  const { toast } = useToast();

  const stopWatchOffset = new Date();
  stopWatchOffset.setSeconds(stopWatchOffset.getSeconds() + 300);

  const { isRunning, hours, minutes, seconds, pause, start } = useStopwatch({
    autoStart: true,
    offsetTimestamp: stopWatchOffset,
  });

  const padStartTimer = (number: number | string) =>
    number.toString().padStart(2, "0");

  const toggleTimer = isRunning ? pause : start;

  const stopTimer = () => {
    setDisplayTrackingContainer(false);
    toast({
      description: `Total time:  ${padStartTimer(hours)}:${padStartTimer(
        minutes
      )}:${padStartTimer(seconds)}`,
      variant: "success",
      action: <IconSuccess />,
    });
  };

  const animatedStopWatch: AnimationProps["animate"] = useMemo(
    () => ({
      opacity: !isRunning ? 1 : 0,
      width: !isRunning ? "auto" : "0px",
    }),
    [isRunning]
  );

  const animatedTrackingContainer: AnimationProps["animate"] = useMemo(
    () => ({
      top: displayTrackingContainer ? "16px" : "-100px",
      opacity: displayTrackingContainer ? 1 : 0,
      transition: {
        duration: 0.5,
        type: "spring",
      },
      transitionEnd: {
        display: displayTrackingContainer ? "flex" : "none",
      },
    }),
    [displayTrackingContainer]
  );

  return (
    <motion.div
      className={styles.container}
      animate={animatedTrackingContainer}
    >
      <div className={styles.badge}>
        <IconPlus />
        <p>Project & Task</p>
      </div>
      <div className={styles.timer}>
        <div className={styles.badge}>
          <IconMenu />
          <p>Today</p>
        </div>
        <IconArrowNarrowRight />
        <div className={styles.counter}>
          <p className="min-w-24">
            {padStartTimer(hours)}:{padStartTimer(minutes)}:
            {padStartTimer(seconds)}
          </p>
          <motion.button onClick={toggleTimer} whileTap={{ scale: 0.8 }}>
            {isRunning ? <IconPause /> : <IconPlay />}
          </motion.button>
          <motion.button
            animate={animatedStopWatch}
            onClick={stopTimer}
            whileTap={{ scale: 0.8 }}
          >
            <IconStop />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FixedTopTimer;
