import moment from "moment";

export const camelize = (string: string): string => {
  return string
    .split(" ")
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

export const getDate = (date: string): string => {
  if (!date) return "";
  return date.split("T")[0];
};

export const getCurrencyPrice = (price: number, currency: string): string => {
  price = price ? price : 0;
  switch (currency) {
    case "dollar": {
      return `$${price}`;
    }
    case "pound": {
      return `£${price}`;
    }
    case "euro": {
      return `€${price}`;
    }

    default: {
      return `$${price}`;
    }
  }
};

export const parseJwt = (token: string) => {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

type MarkArea = {
  xAxis: number;
};

export const getMarkAreaData = (data: string[] | number[]): MarkArea[][] =>
  data.map((el, index) => [
    {
      xAxis: 2 * index,
    },
    {
      xAxis: 2 * index + 1,
    },
  ]);

export const capitalize = (word: string): string =>
  `${word[0].toUpperCase()}${word.slice(1)}`;

export const hexToRGB = (hex: string, alpha: string | number): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export const getDifference = (
  value: number,
  prevValue: number
): string | null =>
  prevValue !== 0
    ? `${((Math.abs(value - prevValue) / prevValue) * 100).toFixed(0)}%`
    : "100%";

export const normalizeProp = (
  prop: string | number | [number, number]
): string =>
  typeof prop === "number"
    ? `${prop}px`
    : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString();

// export const defineColorByPriority = (priority: Priority, theme: DefaultTheme): string => {
//   switch (priority) {
//     case Priority.INFO:
//       return theme.colors.main.primary;
//     case Priority.LOW:
//       return theme.colors.main.success;
//     case Priority.MEDIUM:
//       return theme.colors.main.warning;
//     case Priority.HIGH:
//       return theme.colors.main.error;
//     default:
//       return theme.colors.main.success;
//   }
// };

// export const defineColorBySeverity = (severity: NotificationType | undefined, theme: DefaultTheme): string => {
//   switch (severity) {
//     case 'error':
//       return theme.colors.main.error;
//     case 'warning':
//       return theme.colors.main.warning;
//     case 'success':
//       return theme.colors.main.success;
//     case 'info':
//       return theme.colors.main.primary;
//     default:
//       return theme.colors.main.primary;
//   }
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeBy = (a: any[], b: any[], key: string): any[] =>
  a
    .filter((elem) => !b.find((subElem) => subElem[key] === elem[key]))
    .concat(b);

export const getSmoothRandom = (factor: number, start: number): number => {
  const halfEnvelope = 1 / factor / 2;
  const max = Math.min(1, start + halfEnvelope);
  const min = Math.max(0, start - halfEnvelope);

  return Math.random() * (max - min) + min;
};

export const trimStr = (str: string, charCount = 15) => {
  if (!str) return "";
  var res = str.substring(0, charCount);
  return res + "...";
};

export const getDateAndTime = (date: string) => {
  if (!date) {
    return "";
  }
  const isoDate = date;
  const formattedDate = moment(isoDate).format("MMMM Do YYYY, h:mm a");
  return formattedDate;
};

export const toAbsoluteUrl = (pathname: string) =>
  process.env.PUBLIC_URL + pathname;
