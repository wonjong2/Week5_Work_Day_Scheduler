# Week5_Work_Day_Scheduler

## Description

This Web site is a simple workday scheduler that allows a user to save events for each hour of the day.

- Use Bootstrap for UI configuration
- Use jQuery and JavaScript for functionallity
- Use Moment.js for to work with date and time
- Use localStorage to save events that a user created
- Use setTimeout() to change the background color of each timeblocks whenever the hour changes.

## Web Site's URL

- Work Day Scheduler : 
https://wonjong2.github.io/Week5_Work_Day_Scheduler/

## Git Hub URL for this Web Site
- wonjong2/Week5_Work_Day_Scheduler : https://github.com/wonjong2/Week5_Work_Day_Scheduler

## Usage

- When a user opens this web site, it shows a workday scheduler.
    - There are timeblocks for standard business hours (9AM ~ 5PM)
    - Each timeblock is color coded such as "Light Gray" for the past, "Light Red" for the present and "Light Green" for the future.
    - Time goes changed, the color of each timeblock is updated accordingly
- When a user click into a timeblock, a user can enter an event fot that time.
    - When a user click the save button for that timeblock, the text for that event is saved in local storage.
    - When a user refresh the page, the saved events persist

- __Simple Demo__ : https://watch.screencastify.com/v/SX4udWebezWQlfWVNqSI

Please see the screenshot on this Website.

![screenshot](/assets/images/screenshot.png)
