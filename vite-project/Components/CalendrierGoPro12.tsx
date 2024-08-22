import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';

export default function DateRangeCalculator() {
    const [value, setValue] = React.useState<[dayjs.Dayjs | null, dayjs.Dayjs | null]>([dayjs(), dayjs().add(1, 'day')]);
    const [goproVariant, setGoproVariant] = React.useState<string>('GoPro Hero 12');
    const [durationMessage, setDurationMessage] = React.useState<string>('');
    const [totalCost, setTotalCost] = React.useState<number>(0);

    const variantPrices: { [key: string]: number } = {
        'GoPro Hero 12': 10,
    };

    React.useEffect(() => {
        const [startDate, endDate] = value;
        if (startDate && endDate) {
            const days = endDate.diff(startDate, 'day') + 1;
            if (days < 4) {
                setDurationMessage("La durée de location doit être d'au moins 4 jours.");
                setTotalCost(0);
            } else {
                setDurationMessage('');
                const cost = days * variantPrices[goproVariant];
                setTotalCost(cost);
            }
        }
    }, [value, goproVariant]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mt: 5 }}>

                <Box sx={{ minWidth: 300, mt: 3 }}>
                    <StaticDateRangePicker
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        sx={{
                            [`.${pickersLayoutClasses.contentWrapper}`]: {
                                alignItems: 'center',
                            },
                        }}
                    />
                </Box>

                {durationMessage && (
                    <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                        {durationMessage}
                    </Typography>
                )}

                {totalCost > 0 && (
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Coût total : €{totalCost}
                    </Typography>
                )}
            </Box>
        </LocalizationProvider>
    );
}
