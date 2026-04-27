import React from 'react';
declare global{
    interface RoomOption {
    value: string;
    label: string;
    }

    interface GuestOption {
    value: string;
    label: string;
    }

    interface FeatureItem {
        icon: React.ReactNode;
        title: string;
        description: string;
    }

    interface RoomExtra{
        icon: React.ReactNode;
        title: string;
        stock: number;
    }

    interface RoomList {
        image: string;
        type: string;
        price: number;
        description: string;
        extras: RoomExtra[];
    }
    interface CommoditySection {
        id: string;
        label: string;
        title: string;
        description: string;
        image: string;
        accent: string;
    } 
}