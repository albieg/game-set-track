import React from "react";
import dayjs from "dayjs";


const now = dayjs();

export const today = now.format('DD/MM/YYYY');

export const tomorrow = now.add(1, 'day').format('DD/MM/YYYY');

export const yesterday = now.subtract(1, 'day').format('DD/MM/YYYY');



