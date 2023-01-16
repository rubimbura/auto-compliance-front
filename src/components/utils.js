


export const parseData = (data, type) => {
  switch (type) {
    case 'user':
      return [
        {
          label: 'First name',
          value: data.firstName || '-',
        },
        {
          label: 'Last name',
          value: data.lastName || '-',
        },
        {
          label: 'Email',
          value: data.email || '-',
        },
        {
          label: 'Phone Number',
          value: data.telephoneNumber || '-',
        },
        {
          label: 'Roles',
          value: data.role[0] || '-',
        },
      ]

    case 'profile':
      return [
        {
          label: 'Names',
          value: data.names || '_',
        },
        {
          label: 'Email',
          value: data.email || '_',
        },
        {
          label: 'Phone Number',
          value: data.telephone || '_',
        },
        {
          label: 'Date Created',
          value: data.creationTime || '_',
        },
        {
          label: 'Document ID',
          value: data.documentId || '_',
        },
        {
          label: 'Document Type Name',
          value: data.documentTypeName || '_',
        },
        {
          label: 'Document Type Description',
          value: data.documentTypeDescription || '_',
        },
        {
          label: 'Profile Type Name',
          value: data.profileTypeName || '_',
        },
        {
          label: 'Profile Type Description',
          value: data.profileTypeDescription || '_',
        },
        {
          label: 'STATUS',
          value: data.status || '_',
        },
        {
          label: 'Update Time',
          value: data.updateTime || '_',
        },
      ]
    case 'vehicle':
      return [
        {
          label: 'Creation Time',
          value: data.creationTime || '-',
        },
        {
          label: 'Vehicle Type',
          value: data.vehicleTypeName || '-',
        },
        {
          label: 'Plate Number',
          value: data.numberPlate || '-',
        },
        {
          label: 'Brand Name',
          value: data.brandName || '-',
        },
        {
          label: 'Model Name',
          value: data.modelName || '-',
        },
        {
          label: 'Status',
          value: data.status || '-',
        },
        {
          label: 'Vehicle Type Description',
          value: data.vehicleTypeDescription || '-',
        },
        {
          label: 'Vehicle Type Name',
          value: data.vehicleTypeName || '-',
        },
        {
          label: 'Update Time',
          value: data.updateTime || '-',
        },
      ]
    case 'notification':
      return [
        {
          label: 'Creation Time',
          value: data.creationTime || '-',
        },
        {
          label: 'Source',
          value: data.src || '-',
        },
        {
          label: 'Destination',
          value: data.dest || '-',
        },
        {
          label: 'Type',
          value: data.typeName || '-',
        },
        {
          label: 'status',
          value: data.status || '-',
        },
        {
          label: 'Subject',
          value: data.subject || '-',
        },
        {
          label: 'Description',
          value: data.dest || '-',
        },
        {
          label: 'Message',
          value: data.message || '-',
        },
      ]
    case 'area':
      return [
        {
          label: 'Administarative Location',
          value: data.areaName || '-',
        },
        {
          label: 'Area Name',
          value: data.areaName || '-',
        },
        {
          label: 'Street Address',
          value: data.streetAddress || '-',
        },
      ]
    case 'spot':
      return [
        {
          label: 'Creation Time',
          value: data.creationTime || '-',
        },
        {
          label: 'Parking Area',
          value: data.parkingAreaName || '-',
        },
        {
          label: 'Spot Name',
          value: data.spotName || '-',
        },
        {
          label: 'Ocupation Status',
          value: data.occupationStatus || '-',
        },
        {
          label: 'Sensor ID',
          value: data.sensorId || '-',
        },
        {
          label: 'Status',
          value: data.status || '-',
        },
        {
          label: 'Update time',
          value: data.updateTime || '-',
        },
      ]
    case 'tariff':
      return [
        {
          label: 'Creation Time',
          value: data.creationTime || '-',
        },
        {
          label: 'Tariff Type',
          value: data.tariffTypeName || '-',
        },
        {
          label: 'Tariff Name',
          value: data.tariffName || '-',
        },
        {
          label: 'Unit Duration',
          value: data.unitDuration || '-',
        },
        {
          label: 'Tariff Description',
          value: data.tariffTypeDescription || '-',
        },
        {
          label: 'Update time',
          value: data.updateTime || '-',
        },
      ]
    case 'penalities':
      return [
        {
          label: 'Creation Time',
          value: data.creationTime || '-',
        },
        {
          label: 'Parking Area Name',
          value: data.areaName || '-',
        },
        {
          label: 'Spot Name',
          value: data.spotName || '-',
        },
        {
          label: 'Number Plate',
          value: data.numberPlate || '-',
        },
        {
          label: 'Unit Duration',
          value: data.unitDuration || '-',
        },
        {
          label: 'Amount',
          value: data.amount || '-',
        },
        {
          label: 'Payment reference',
          value: data.paymentReference || '-',
        },
        {
          label: 'Expiration Time',
          value: data.expirationTime || '-',
        },
        {
          label: 'Status',
          value: data.status || '-',
        },
      ]
    case 'payment':
      return [
        {
          label: 'Creation Time',
          value: data.creationTime || '-',
        },
        {
          label: 'Payable Type',
          value: data.payableTypeName || '-',
        },
        {
          label: 'Payable Reference',
          value: data.payableReference || '-',
        },
        {
          label: 'Payment Type Name',
          value: data.paymentTypeName || '-',
        },
        {
          label: 'Payment Type Description',
          value: data.paymentTypeDescription || '-',
        },
        {
          label: 'Amount',
          value: data.amount || '-',
        },
        {
          label: 'External Reference',
          value: data.externalReference || '-',
        },
        {
          label: 'Status',
          value: data.status || '-',
        },
      ]
    case 'profileType':
      return [
        {
          label: 'Creation Date',
          value: data.creationTime || '-',
        },
        {
          label: 'Update Time',
          value: data.updateTime || '-',
        },
        {
          label: 'Type Name',
          value: data.typeName || '-',
        },
        {
          label: 'Status' || '-',
          value: data.status,
        },
        {
          label: 'Description',
          value: data.description || '-',
        },
        {
          label: 'ID',
          value: data.id || '-',
        },
      ]
    case 'vehicleOwnership':
      return [
        {
          label: 'Creation Date',
          value: data.creationTime || '-',
        },
        {
          label: 'Brand Name',
          value: data.brandName || '-',
        },
        {
          label: 'Plate Number',
          value: data.numberPlate || '-',
        },
        {
          label: 'Status' || '-',
          value: data.status,
        },
        {
          label: 'Description',
          value: data.vehicleTypeDescription || '-',
        },
        {
          label: 'ID',
          value: data.id || '-',
        },
        {
          label: 'Telephone',
          value: data.telephone || '-',
        },
      ]
    case 'vehicleType':
      return [
        {
          label: 'Creation Date',
          value: data.creationTime || '-',
        },
        {
          label: 'Brand Name',
          value: data.brandName || '-',
        },
        {
          label: 'Plate Number',
          value: data.numberPlate || '-',
        },
        {
          label: 'Status' || '-',
          value: data.status,
        },
        {
          label: 'Description',
          value: data.vehicleTypeDescription || '-',
        },
        {
          label: 'ID',
          value: data.id || '-',
        },
      ]
    case 'vehicleBrand':
      return [
        {
          label: 'Creation Date',
          value: data.creationTime || '-',
        },
        {
          label: 'Brand Name',
          value: data.brandName || '-',
        },
        {
          label: 'Plate Number',
          value: data.numberPlate || '-',
        },
        {
          label: 'Status' || '-',
          value: data.status,
        },
        {
          label: 'Description',
          value: data.vehicleTypeDescription || '-',
        },
        {
          label: 'ID',
          value: data.id || '-',
        },
      ]

    case 'vehicleModel':
      return [
        {
          label: 'Creation Date',
          value: data.creationTime || '-',
        },
        {
          label: 'Brand Name',
          value: data.brandName || '-',
        },
        {
          label: 'Plate Number',
          value: data.numberPlate || '-',
        },
        {
          label: 'Status' || '-',
          value: data.status,
        },
        {
          label: 'Description',
          value: data.vehicleTypeDescription || '-',
        },
        {
          label: 'ID',
          value: data.id || '-',
        },
      ]
    case 'notificationType':
      return [
        {
          label: 'Creation Date',
          value: data.creationTime || '-',
        },
        {
          label: 'Update Time',
          value: data.updateTime || '-',
        },
        {
          label: 'Names',
          value: data.names || '-',
        },
        {
          label: 'ID' || '-',
          value: data.id,
        },
        {
          label: 'Description',
          value: data.vehicleTypeDescription || '-',
        },
        {
          label: 'Address Value',
          value: data.addressValue || '-',
        },
        {
          label: 'Telephone',
          value: data.telephone || '-',
        },
      ]
    case 'notificationLogs':
      return [
        {
          label: 'Creation Time',
          value: data.creationTime || '-',
        },
        {
          label: 'SRC',
          value: data.src || '-',
        },
        {
          label: 'Type Name',
          value: data.typeName || '-',
        },
        {
          label: 'status',
          value: data.status || '-',
        },
        {
          label: 'Subject',
          value: data.subject || '-',
        },
        {
          label: 'Description',
          value: data.dest || '-',
        },
        {
          label: 'Message',
          value: data.message || '-',
        },
      ]

    case 'tariffType':
      return [
        {
          label: 'CREATION TIME',
          value: data.creationTime,
        },
        {
          label: 'ID',
          value: data.id,
        },
        {
          label: 'TYPE NAME',
          value: data.typeName,
        },
        {
          label: 'STATUS',
          value: data.status,
        },
        {
          label: 'DESCRIPTION',
          value: data.description,
        },
      ]

    case 'temporalTicket':
      return [
        {
          label: 'CREATION TIME',
          value: data.creationTime,
        },
        {
          label: 'ID',
          value: data.id,
        },
        {
          label: 'AMOUNT',
          value: data.amount,
        },
        {
          label: 'UPDATE TIME',
          value: 'updateTime',
        },
        {
          label: 'STATUS',
          value: data.status,
        },
        {
          label: 'SENSOR ID',
          value: data.sensorId,
        },
        {
          label: 'AREA NAME',
          value: data.areaName,
        },
        {
          label: 'TARIFF',
          value: data.tariffName,
        },
        {
          label: 'UNIT DURATION',
          value: data.duration,
        },
      ]
    case 'paymentType':
      return [
        {
          label: 'CREATION TIME',
          value: data.creationTime,
        },
        {
          label: 'ID',
          value: data.id,
        },
        {
          label: 'AMOUNT',
          value: data.amount,
        },
        {
          label: 'UPDATE TIME',
          value: data.updateTime,
        },
        {
          label: 'STATUS',
          value: data.status,
        },
        {
          label: 'SENSOR ID',
          value: data.sensorId,
        },
        {
          label: 'AREA NAME',
          value: data.areaName,
        },
        {
          label: 'TARIFF',
          value: data.tariffName,
        },
        {
          label: 'DESCRIPTION',
          value: data.description,
        },
      ]
    case 'payableType':
      return [
        {
          label: 'CREATION TIME',
          value: data.creationTime,
        },
        {
          label: 'ID',
          value: data.id,
        },
        {
          label: 'TYPE name',
          value: data.typeName,
        },
        {
          label: 'STATUS',
          value: data.status,
        },

        {
          label: 'DESCRIPTION',
          value: data.description,
        },
      ]
      case 'tariffItem':
        return [
          {
            label: 'TARIFF TYPE',
            value: data.tariffName,
          },
        ]
    default:
      return [
        {
          label: 'Creation Date',
          value: data.creationTime || '-',
        },
        {
          label: 'Created By',
          value: data.createdBy || '-',
        },
        {
          label: 'Updated By',
          value: data.updatedBy || '-',
        },
        {
          label: 'Status' || '-',
          value: data.status,
        },
        {
          label: 'Description',
          value: data.description || '-',
        },
        {
          label: 'Brand Name',
          value: data.brandName || '-',
        },
        {
          label: 'Type Name' || '-',
          value: data.typeName,
        },
      ]
  }
}
