export type AlertType = 'danger' | 'warning' | 'info' | 'success';

type AlertProperties = { heading: string; colors: { bgHeading: string; bgText: string; border: string; text: string } };

const ALERT_COLORS = {
  RED: { bgHeading: 'bg-red-500', bgText: 'bg-red-100', border: 'border-red-400', text: 'text-red-700' },
  YELLOW: { bgHeading: 'bg-yellow-500', bgText: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-700' },
  BLUE: { bgHeading: 'bg-blue-500', bgText: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-700' },
  GREEN: { bgHeading: 'bg-green-500', bgText: 'bg-green-100', border: 'border-green-400', text: 'text-green-700' },
};

export const AlertTypeMap: Record<AlertType, AlertProperties> = {
  danger: {
    heading: 'Danger',
    colors: { ...ALERT_COLORS.RED },
  },
  warning: {
    heading: 'Warning',
    colors: { ...ALERT_COLORS.YELLOW },
  },
  info: {
    heading: 'Information',
    colors: { ...ALERT_COLORS.BLUE },
  },
  success: {
    heading: 'Success',
    colors: { ...ALERT_COLORS.GREEN },
  },
};
