const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // Allows all origins, you can restrict to specific origins if needed
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // Allowed methods
	res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
	next();
});

app.get("/grid-view-response", (req, res) => {
	res.json({
        "categories": [
            {
                "categoryTitle": "Culture",
                "parameters": [
                    {
                        "parameterTitle": "CulturalCelebration",
                        "sections": [
                            {
                                "sectionTitle": "Community Cultural Engagement",
                                "metricData": [
                                    {
                                        "displayName": "Cultural celebration complaints received",
                                        "metricName": "Culture_CulturalCelebration_ccComplaintsReceived",
                                        "sectionName": "Community Cultural Engagement",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 56.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 87.00000000000003
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 144
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 144
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Cultural celebration complaints resolved",
                                        "metricName": "Culture_CulturalCelebration_ccComplaintsResolved",
                                        "sectionName": "Community Cultural Engagement",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 56.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 87.00000000000003
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 144
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 144
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Employees who completed cultural awareness training (measured)",
                                        "metricName": "Culture_CulturalCelebration_employeesWhoCompletedCulturalAwarenessTraining",
                                        "sectionName": "Community Cultural Engagement",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 44.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 45.00000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 90
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 90
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Formal consultations with local groups/associations",
                                        "metricName": "Culture_CulturalCelebration_formalConsultationsWithLocalGroups",
                                        "sectionName": "Community Cultural Engagement",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 56.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 56.99999999999997
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 113.99999999999996
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 113.99999999999996
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Hyper-local employees",
                                        "metricName": "Culture_CulturalCelebration_hyperLocalEmployees",
                                        "sectionName": "Community Cultural Engagement",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 44.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 41.999999999999986
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 86.99999999999997
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 86.99999999999997
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Invested In community projects/programmes",
                                        "metricName": "Culture_CulturalCelebration_investedInCommunityProjects",
                                        "sectionName": "Community Cultural Engagement",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 56.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 855.0000000000005
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 912.0000000000005
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 912.0000000000005
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Local community member leadership roles in cultural celebration programmes",
                                        "metricName": "Culture_CulturalCelebration_localCommunityMemberLeadershipRolesInCCProgrammes",
                                        "sectionName": "Community Cultural Engagement",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 44.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 45.00000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 90
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 90
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Context and exchange",
                                "metricData": [
                                    {
                                        "displayName": "Community members involved in delivering cultural activities/tours",
                                        "metricName": "Culture_CulturalCelebration_communityMembersInvolvedInDeliveringCulturalActivities",
                                        "sectionName": "Context and exchange",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 111.00000000000007
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 19.999999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 131.00000000000006
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 131.00000000000006
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Cultural activities offered to customers",
                                        "metricName": "Culture_CulturalCelebration_culturalActivitiesOfferedToCustomers",
                                        "sectionName": "Context and exchange",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 100.00000000000004
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 199.99999999999986
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 299.9999999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 299.9999999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Customers participated in cultural activities",
                                        "metricName": "Culture_CulturalCelebration_customersParticipatedInCulturalActivities",
                                        "sectionName": "Context and exchange",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 25.00000000000001
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 19.999999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 45
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 45
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Employees fluent in local languages",
                                        "metricName": "Culture_CulturalCelebration_employeesWhoSpeakNativeLanguagesFluently",
                                        "sectionName": "Context and exchange",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 12
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 19.999999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 31.999999999999993
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 31.999999999999993
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "International/national recognized cultural days celebrated",
                                        "metricName": "Culture_CulturalCelebration_internationalAndNationalRecognisedCulturalDaysCelebrated",
                                        "sectionName": "Context and exchange",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 10.000000000000005
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 45.00000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 55.00000000000003
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 55.00000000000003
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Locally inspired menu dishes",
                                        "metricName": "Culture_CulturalCelebration_locallyInspiredMenu",
                                        "sectionName": "Context and exchange",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 100.00000000000004
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 30.00000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 130.00000000000006
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 130.00000000000006
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total property spend/contribution to cultural activities",
                                        "metricName": "Culture_CulturalCelebration_totalContributionToCulturalActivities",
                                        "sectionName": "Context and exchange",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 25555.00000000001
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 3000.000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 28555.000000000015
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 28555.000000000015
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Local and artisanal products",
                                "metricData": [
                                    {
                                        "displayName": "Local artisans procured/promoted",
                                        "metricName": "Culture_CulturalCelebration_localArtisansProcured",
                                        "sectionName": "Local and artisanal products",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 200.00000000000009
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 9.999999999999996
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 210.00000000000009
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 210.00000000000009
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total spend with local artists/artisans",
                                        "metricName": "Culture_CulturalCelebration_totalSpendWithLocalArtists",
                                        "sectionName": "Local and artisanal products",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 10000.000000000004
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 1999.9999999999998
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 12000.000000000004
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 12000.000000000004
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Local design and decor",
                                "metricData": [
                                    {
                                        "displayName": "Local craftspeople/experts employed in design and build",
                                        "metricName": "Culture_CulturalCelebration_localExpertsEmployedInDesignAndBuild",
                                        "sectionName": "Local design and decor",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 100.00000000000004
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 99.99999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 199.99999999999997
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 199.99999999999997
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Locally inspired and sourced",
                                        "metricName": "Culture_CulturalCelebration_locallyInspiredItems",
                                        "sectionName": "Local design and decor",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 30.000000000000014
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 9.999999999999996
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 40.000000000000014
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 40.000000000000014
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "categoryTitle": "Conservation",
                "parameters": [
                    {
                        "parameterTitle": "SustainableInfrastructure",
                        "sections": [
                            {
                                "sectionTitle": "",
                                "metricData": [
                                    {
                                        "displayName": "Property building size",
                                        "metricName": "Conservation_SustainableInfrastructure_PropertyBuildingSize",
                                        "sectionName": "",
                                        "conversion": "sqm",
                                        "measurementType": "Area",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Jan",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 13229.92700729926
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 41514.598540145955
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 13686.131386861303
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "May",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Jun",
                                                "seriesValue": 6843.065693430657
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 34671.5328467153
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 76186.13138686126
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Jan",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 12773.722627737217
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 41058.394160583906
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 13686.131386861303
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "May",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Jun",
                                                "seriesValue": 13686.131386861303
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 41514.598540145955
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Jul",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Aug",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Sep",
                                                "seriesValue": 13686.131386861303
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q3",
                                                "seriesValue": 41970.802919707996
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Oct",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Nov",
                                                "seriesValue": 13686.131386861303
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Dec",
                                                "seriesValue": 14142.335766423346
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q4",
                                                "seriesValue": 41970.802919707996
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2023",
                                                "seriesValue": 166514.59854014585
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "parameterTitle": "SustainableWater",
                        "sections": [
                            {
                                "sectionTitle": "Water consumption",
                                "metricData": [
                                    {
                                        "displayName": "Water consumption",
                                        "metricName": "Conservation_SustainableWater_waterConsumption",
                                        "sectionName": "Water consumption",
                                        "conversion": "Kl",
                                        "measurementType": "Volume",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 300.0000000000001
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 300.0000000000001
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 500.0000000000002
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "May",
                                                "seriesValue": 399.9999999999997
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 900
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 1200
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "categoryTitle": "Community",
                "parameters": [
                    {
                        "parameterTitle": "CommunityImpact",
                        "sections": [
                            {
                                "sectionTitle": "Projects",
                                "metricData": [
                                    {
                                        "displayName": "Spend",
                                        "metricName": "Community_CommunityImpact_projectsSpend",
                                        "sectionName": "Projects",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 56.999999999999986
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 855.0000000000005
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 912.0000000000005
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 912.0000000000005
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "parameterTitle": "EthicalAndInclusiveLabour",
                        "sections": [
                            {
                                "sectionTitle": "Employee climate survey results",
                                "metricData": [
                                    {
                                        "displayName": "Number of surveys submitted",
                                        "metricName": "Community_EthicalAndInclusiveLabour_surveysSubmitted",
                                        "sectionName": "Employee climate survey results",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 12.000000000000005
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 12.000000000000005
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 12.000000000000005
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Employee demographics",
                                "metricData": [
                                    {
                                        "displayName": "Employee promotions",
                                        "metricName": "Community_EthicalAndInclusiveLabour_employeePromotions",
                                        "sectionName": "Employee demographics",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 20
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 20
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 20
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Employees who left",
                                        "metricName": "Community_EthicalAndInclusiveLabour_employees_who_left",
                                        "sectionName": "Employee demographics",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 23
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 23
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 23
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Employee turnover",
                                        "metricName": "Community_EthicalAndInclusiveLabour_employeeTurnover",
                                        "sectionName": "Employee demographics",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 1000.0000000000005
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 1000.0000000000005
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 1000.0000000000005
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "New full-time employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_newFulltimeEmployees",
                                        "sectionName": "Employee demographics",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 99.99999999999997
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 99.99999999999997
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 99.99999999999997
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "New non-full time employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_newNonFulltimeEmployees",
                                        "sectionName": "Employee demographics",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 20
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 20
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 20
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_totalEmployees",
                                        "sectionName": "Employee demographics",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 1000.0000000000005
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 1000.0000000000005
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 1000.0000000000005
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Employee productivity",
                                "metricData": [
                                    {
                                        "displayName": "Average individual employee hours worked",
                                        "metricName": "Community_EthicalAndInclusiveLabour_averageIndividualEmployeeHoursWorked",
                                        "sectionName": "Employee productivity",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 7.999999999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 7.999999999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 7.999999999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Disciplinary issues (compliance log)",
                                        "metricName": "Community_EthicalAndInclusiveLabour_disciplinaryIssues",
                                        "sectionName": "Employee productivity",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 0.9999999999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 0.9999999999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 0.9999999999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Employee days worked",
                                        "metricName": "Community_EthicalAndInclusiveLabour_employeeDaysWorked",
                                        "sectionName": "Employee productivity",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 5
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 5
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 5
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Employment type",
                                "metricData": [
                                    {
                                        "displayName": "Casual employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_casualEmployees",
                                        "sectionName": "Employment type",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 22
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 22
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 22
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Employees on permanent contract",
                                        "metricName": "Community_EthicalAndInclusiveLabour_employeesOnPermanentContract",
                                        "sectionName": "Employment type",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 33.000000000000014
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 33.000000000000014
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 33.000000000000014
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Seasonal employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_seasonalEmployees",
                                        "sectionName": "Employment type",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 31.999999999999996
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 31.999999999999996
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 31.999999999999996
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Temporary employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_temporaryEmployees",
                                        "sectionName": "Employment type",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 23
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 23
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 23
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Gender equity",
                                "metricData": [
                                    {
                                        "displayName": "Female employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_femaleEmployees",
                                        "sectionName": "Gender equity",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 30
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 30
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 30
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Male employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_maleEmployees",
                                        "sectionName": "Gender equity",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 30
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 30
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 30
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Non-binary employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_nonBinaryEmployees",
                                        "sectionName": "Gender equity",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 20.99999999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 20.99999999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 20.99999999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Prefer not to disclose employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_preferNotToDiscloseEmployees",
                                        "sectionName": "Gender equity",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 0.9999999999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 0.9999999999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 0.9999999999999999
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Locational employment",
                                "metricData": [
                                    {
                                        "displayName": "Hyper-local employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_hyperLocalEmployees",
                                        "sectionName": "Locational employment",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 20
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 20
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 20
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "National employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_nationalEmployees",
                                        "sectionName": "Locational employment",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 33.99999999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 33.99999999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 33.99999999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Non-national employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_nonNationalEmployees",
                                        "sectionName": "Locational employment",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 31.999999999999996
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 31.999999999999996
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 31.999999999999996
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Regional employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_regionalEmployees",
                                        "sectionName": "Locational employment",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 31.999999999999996
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 31.999999999999996
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 31.999999999999996
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Payroll",
                                "metricData": [
                                    {
                                        "displayName": "Average pay per employee",
                                        "metricName": "Community_EthicalAndInclusiveLabour_averagePayPerEmployee",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 24999.999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 24999.999999999993
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 24999.999999999993
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Cost to company",
                                        "metricName": "Community_EthicalAndInclusiveLabour_costToCompany",
                                        "sectionName": "Payroll",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Jan",
                                                "seriesValue": 155000
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Feb",
                                                "seriesValue": 145000
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 155000
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 455000
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 150000
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "May",
                                                "seriesValue": 155000
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 305000
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 760000
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Dec",
                                                "seriesValue": 155000
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q4",
                                                "seriesValue": 155000
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2023",
                                                "seriesValue": 155000
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Leave liability balance",
                                        "metricName": "Community_EthicalAndInclusiveLabour_leaveLiabilityBalance",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 321212.99999999994
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 321212.99999999994
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 321212.99999999994
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll spend (level 1)",
                                        "metricName": "Community_EthicalAndInclusiveLabour_levelOnePayrollCost",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 99999.99999999997
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 99999.99999999997
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 99999.99999999997
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll spend (level 3)",
                                        "metricName": "Community_EthicalAndInclusiveLabour_levelThreePayrollCost",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 49999.999999999985
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 49999.999999999985
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 49999.999999999985
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll spend (level 2)",
                                        "metricName": "Community_EthicalAndInclusiveLabour_levelTwoPayrollCost",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 70000.00000000001
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 70000.00000000001
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 70000.00000000001
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll costs for female employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_payrollCostsForFemaleEmployees",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 35003.99999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 35003.99999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 35003.99999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll costs for male employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_payrollCostsForMaleEmployees",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 40000
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 40000
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 40000
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll costs for non binary employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_payrollCostsForNonBinaryEmployees",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 33999.99999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 33999.99999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 33999.99999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll costs for rather not disclose employees",
                                        "metricName": "Community_EthicalAndInclusiveLabour_payrollCostsForRatherNotDiscloseEmployees",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 49999.999999999985
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 49999.999999999985
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 49999.999999999985
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total payroll spend (all levels)",
                                        "metricName": "Community_EthicalAndInclusiveLabour_totalPayrollSpend",
                                        "sectionName": "Payroll",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 20000.000000000004
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 20000.000000000004
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 300000
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 300000
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 320000
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "categoryTitle": "Commerce",
                "parameters": [
                    {
                        "parameterTitle": "BusinessTransparency",
                        "sections": [
                            {
                                "sectionTitle": "Economic transparency",
                                "metricData": [
                                    {
                                        "displayName": "Total revenue",
                                        "metricName": "Commerce_BusinessTransparency_totalRevenue",
                                        "sectionName": "Economic transparency",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 100000.00000000004
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 100000.00000000004
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 100000.00000000004
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "parameterTitle": "BusinessViability",
                        "sections": [
                            {
                                "sectionTitle": "Governance",
                                "metricData": [
                                    {
                                        "displayName": "Legal costs",
                                        "metricName": "Commerce_BusinessViability_legalCosts",
                                        "sectionName": "Governance",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 13000.000000000004
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 13000.000000000004
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 13000.000000000004
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Housekeeping operations",
                                "metricData": [
                                    {
                                        "displayName": "Customer satisfaction rating",
                                        "metricName": "Commerce_BusinessViability_customerSatisfactionRating",
                                        "sectionName": "Housekeeping operations",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 30.00000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 30.00000000000002
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 30.00000000000002
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Liability management",
                                "metricData": [
                                    {
                                        "displayName": "Cash flow coverage ratio",
                                        "metricName": "Commerce_BusinessViability_cashFlowCoverageRatio",
                                        "sectionName": "Liability management",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 122.00000000000004
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 122.00000000000004
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 122.00000000000004
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Debt to equity ratio",
                                        "metricName": "Commerce_BusinessViability_debtToEquityRatio",
                                        "sectionName": "Liability management",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 123.00000000000001
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 123.00000000000001
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 123.00000000000001
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Profitability management",
                                "metricData": [
                                    {
                                        "displayName": "Revenue - accommodation",
                                        "metricName": "Commerce_BusinessViability_accomodationRevenue",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 3000.000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 3000.000000000002
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 3000.000000000002
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Average length of stay (ALOS)",
                                        "metricName": "Commerce_BusinessViability_averageLengthOfStay",
                                        "sectionName": "Profitability management",
                                        "conversion": "days",
                                        "measurementType": "Time",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 2.9999999999999987
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 2.9999999999999987
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 2.9999999999999987
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Bednights occupied",
                                        "metricName": "Commerce_BusinessViability_bednightsSold",
                                        "sectionName": "Profitability management",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 11.999999999999995
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 11.999999999999995
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 11.999999999999995
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Breakeven revenue",
                                        "metricName": "Commerce_BusinessViability_breakevenRevenue",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 30000.000000000004
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 30000.000000000004
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 30000.000000000004
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Day visitors",
                                        "metricName": "Commerce_BusinessViability_dayVisitors",
                                        "sectionName": "Profitability management",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 77
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 77
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 77
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "GOPPABN",
                                        "metricName": "Commerce_BusinessViability_goppabn",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 1999.9999999999998
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 1999.9999999999998
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 1999.9999999999998
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "GOPPAR",
                                        "metricName": "Commerce_BusinessViability_goppar",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 999.9999999999999
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 999.9999999999999
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 999.9999999999999
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Gross profit",
                                        "metricName": "Commerce_BusinessViability_grossProfit",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 69999.99999999996
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 69999.99999999996
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 69999.99999999996
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Gross profit percentage",
                                        "metricName": "Commerce_BusinessViability_grossProfitPercent",
                                        "sectionName": "Profitability management",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 70.00000000000001
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 70.00000000000001
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 70.00000000000001
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Net profit after tax",
                                        "metricName": "Commerce_BusinessViability_npat",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 50000.00000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 50000.00000000002
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 50000.00000000002
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Payroll costs",
                                        "metricName": "Commerce_BusinessViability_PayrollCosts",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 20000.000000000004
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 20000.000000000004
                                            },
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Apr",
                                                "seriesValue": 300000
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q2",
                                                "seriesValue": 300000
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 320000
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total bednights available",
                                        "metricName": "Commerce_BusinessViability_totalBednightsAvailable",
                                        "sectionName": "Profitability management",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 19.999999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 19.999999999999993
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 19.999999999999993
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total operating cost",
                                        "metricName": "Commerce_BusinessViability_totalOperatingCost",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 10000.000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 10000.000000000002
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 10000.000000000002
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total overheads",
                                        "metricName": "Commerce_BusinessViability_totalOverheads",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 30.00000000000002
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 30.00000000000002
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 30.00000000000002
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total revenue",
                                        "metricName": "Commerce_BusinessViability_totalRevenue",
                                        "sectionName": "Profitability management",
                                        "conversion": "INR",
                                        "measurementType": "Currency",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 100000.00000000004
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 100000.00000000004
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 100000.00000000004
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total rooms available",
                                        "metricName": "Commerce_BusinessViability_totalRoomsAvailable",
                                        "sectionName": "Profitability management",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 99.99999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 99.99999999999993
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 99.99999999999993
                                            }
                                        ]
                                    },
                                    {
                                        "displayName": "Total rooms occupied",
                                        "metricName": "Commerce_BusinessViability_totalRoomsOccupied",
                                        "sectionName": "Profitability management",
                                        "conversion": "No.",
                                        "measurementType": "Amount",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 49.999999999999964
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 49.999999999999964
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 49.999999999999964
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "sectionTitle": "Safety and security",
                                "metricData": [
                                    {
                                        "displayName": "Occupational accident rate",
                                        "metricName": "Commerce_BusinessViability_occupationalAccidentNumber",
                                        "sectionName": "Safety and security",
                                        "conversion": "%",
                                        "measurementType": "Percentage",
                                        "seriesData": [
                                            {
                                                "seriesType": "Monthly",
                                                "seriesName": "Mar",
                                                "seriesValue": 19.999999999999993
                                            },
                                            {
                                                "seriesType": "Quarterly",
                                                "seriesName": "Q1",
                                                "seriesValue": 19.999999999999993
                                            },
                                            {
                                                "seriesType": "Yearly",
                                                "seriesName": "2024",
                                                "seriesValue": 19.999999999999993
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "zones": [
            "Office",
            "Kitchen"
        ]
    });
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});