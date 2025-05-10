export interface HomeNotificationData{
    category: string;
    actionable: boolean;
    id: number;
    application_name: string;
    subject: string;
    body: string;
    source_reference: string;
    action_url: string;
    priority: string;
    type: string;
    start_time: string;
    end_time: string;
    created_by: string;
    created_date: string;
    updated_by: string;
    updated_date: string;
    attributes: string;
    is_read: boolean;
    team_name: string;
    source_system_id: string;
}

export interface ProductTypesData {
    RevisionNumber: number;
    ReferenceNumber: number;
    Id: number;
    Name: string;
}