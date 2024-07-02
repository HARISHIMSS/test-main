import { checkKeyIsPresent, dbKeys, getFilteredTagsObject } from "./helpers";

const data = {
  "context": {
    "domain": "ONDC:FIS12",
    "location": {
      "country": {
        "code": "IND"
      },
      "city": {
        "code": "*"
      }
    },
    "version": "2.1.0",
    "action": "on_search",
    "bap_id": "bap.credit.becknprotocol.io",
    "bap_uri": "https://bap.credit.becknprotocol.io/",
    "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
    "message_id": "bb579fb8-cb82-4824-be12-fcbc405b6608",
    "ttl": "PT30M",
    "timestamp": "2023-05-25T05:23:03.443Z",
    "bpp_id": "bpp.credit.becknprotocol.org",
    "bpp_uri": "https://bpp.credit.becknprotocol.org"
  },
  "message": {
    "catalog": {
      "descriptor": {
        "name": "ICICI Bank"
      },
      "providers": [
        {
          "id": "PROVIDER_ID",
          "descriptor": {
            "images": [
              {
                "url": "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/logo.png",
                "size_type": "sm"
              }
            ],
            "name": "ICICI Bank",
            "short_desc": "ICICI Bank Ltd",
            "long_desc": "ICICI Bank Ltd, India."
          },
          "categories": [
            {
              "id": "101123",
              "descriptor": {
                "code": "INVOICE_BASED_LOAN",
                "name": "Invoice based loan"
              }
            }
          ],
          "items": [
            {
              "id": "ITEM_ID_INVOICE_LOAN",
              "descriptor": {
                "code": "INVOICE_BASED_LOAN",
                "name": "Invoice based Loan"
              },
              "category_ids": [
                "101123"
              ],
              "tags": [
                {
                  "descriptor": {
                    "code": "INFO",
                    "name": "Information"
                  },
                  "list": [
                    {
                      "descriptor": {
                        "code": "MIN_INTEREST_RATE",
                        "name": "Minimum Interest Rate",
                        "short_desc": "Loans starting from 9% (p.a)"
                      },
                      "value": "9%"
                    },
                    {
                      "descriptor": {
                        "code": "MAX_INTEREST_RATE",
                        "name": "Maximum Interest Rate",
                        "short_desc": "Loan Rate below from 15% (p.a)"
                      },
                      "value": "15%"
                    },
                    {
                      "descriptor": {
                        "code": "MIN_TENURE",
                        "name": "Minimum Tenure",
                        "short_desc": "Loan Tenure starting form 5 months"
                      },
                      "value": "5 months"
                    },
                    {
                      "descriptor": {
                        "code": "MAX_TENURE",
                        "name": "Maximum Tenure",
                        "short_desc": "Loan Tenure upto form 5 years"
                      },
                      "value": "5 years"
                    },
                    {
                      "descriptor": {
                        "code": "MIN_LOAN_AMOUNT",
                        "name": "Minimum Loan Amount",
                        "short_desc": "Loan Amount starting from 50,000"
                      },
                      "value": "50000"
                    },
                    {
                      "descriptor": {
                        "code": "MAX_LOAN_AMOUNT",
                        "name": "Minimum Loan Amount",
                        "short_desc": "Loan Amount upto form 50,00,000"
                      },
                      "value": "5000000"
                    }
                  ],
                  "display": true
                }
              ],
              "matched": true,
              "recommended": true,
              "xinput": {
                "head": {
                  "descriptor": {
                    "name": "Customer Information"
                  },
                  "index": {
                    "min": 0,
                    "cur": 0,
                    "max": 0
                  },
                  "headings": [
                    "Organization Information"
                  ]
                },
                "form": {
                  "id": "F01",
                  "mime_type": "text/html",
                  "url": "https://bpp.credit.becknprotocol.org/xinput/formid/F01",
                  "resubmit": false,
                  "multiple_sumbissions": false
                },
                "required": true
              }
            }
          ],
          "payments": [
            {
              "collected_by": "BPP",
              "tags": [
                {
                  "descriptor": {
                    "code": "BUYER_FINDER_FEES"
                  },
                  "display": false,
                  "list": [
                    {
                      "descriptor": {
                        "code": "BUYER_FINDER_FEES_TYPE"
                      },
                      "value": "PERCENT_ANNUALIZED"
                    },
                    {
                      "descriptor": {
                        "code": "BUYER_FINDER_FEES_PERCENTAGE"
                      },
                      "value": "1"
                    }
                  ]
                },
                {
                  "descriptor": {
                    "code": "SETTLEMENT_TERMS"
                  },
                  "display": false,
                  "list": [
                    {
                      "descriptor": {
                        "code": "SETTLEMENT_WINDOW"
                      },
                      "value": "PT60M"
                    },
                    {
                      "descriptor": {
                        "code": "SETTLEMENT_BASIS"
                      },
                      "value": "INVOICE_RECEIPT"
                    },
                    {
                      "descriptor": {
                        "code": "MANDATORY_ARBITRATION"
                      },
                      "value": "TRUE"
                    },
                    {
                      "descriptor": {
                        "code": "COURT_JURISDICTION"
                      },
                      "value": "New Delhi"
                    },
                    {
                      "descriptor": {
                        "code": "STATIC_TERMS"
                      },
                      "value": "https://bpp.credit.becknprotocol.org/personal-banking/loans/invoice-based-loan"
                    },
                    {
                      "descriptor": {
                        "code": "OFFLINE_CONTRACT"
                      },
                      "value": "true"
                    }
                  ]
                }
              ]
            }
          ],
          "tags": [
            {
              "descriptor": {
                "code": "CONTACT_INFO",
                "name": "Contact Info"
              },
              "list": [
                {
                  "descriptor": {
                    "code": "GRO_NAME",
                    "name": "Gro name"
                  },
                  "value": "ICICI"
                },
                {
                  "descriptor": {
                    "code": "GRO_EMAIL",
                    "name": "Gro email"
                  },
                  "value": "lifeline@iciciprulife.com"
                },
                {
                  "descriptor": {
                    "code": "GRO_CONTACT_NUMBER",
                    "name": "Gro contact number"
                  },
                  "value": "1860 266 7766"
                },
                {
                  "descriptor": {
                    "code": "CUSTOMER_SUPPORT_LINK",
                    "name": "Customer support link"
                  },
                  "value": "https://buy.iciciprulife.com/buy/GrievanceRedStep.htm?execution=e1s1"
                },
                {
                  "descriptor": {
                    "code": "CUSTOMER_SUPPORT_CONTACT_NUMBER",
                    "name": "Customer support contact number"
                  },
                  "value": "1800 1080"
                },
                {
                  "descriptor": {
                    "code": "CUSTOMER_SUPPORT_EMAIL",
                    "name": "Customer support email"
                  },
                  "value": "customer.care@icicibank.com"
                }
              ]
            },
            {
              "descriptor": {
                "code": "LSP_INFO",
                "name": "Lsp Info"
              },
              "list": [
                {
                  "descriptor": {
                    "code": "LSP_NAME",
                    "name": "Lsp name"
                  },
                  "value": "ICICI_LSP"
                },
                {
                  "descriptor": {
                    "code": "LSP_EMAIL",
                    "name": "Lsp email"
                  },
                  "value": "lsp@iciciprulife.com"
                },
                {
                  "descriptor": {
                    "code": "LSP_CONTACT_NUMBER",
                    "name": "Lsp contact number"
                  },
                  "value": "1860 266 7766"
                },
                {
                  "descriptor": {
                    "code": "LSP_ADDRESS",
                    "name": "Lsp Address"
                  },
                  "value": "One Indiabulls centre, Tower 1, 18th Floor Jupiter mill compound 841, Senapati Bapat Marg, Elphinstone Road, Mumbai 400013"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
const getInitialCatalog = (data: object) => {
  if (
    checkKeyIsPresent('context', data) &&
    checkKeyIsPresent('message', data)
  ) {
    const contextDocument = data['context'];
    const messageDocument = data['message'];
    if (contextDocument && messageDocument) {
      if (
        checkKeyIsPresent('bpp_id', contextDocument) &&
        checkKeyIsPresent('location', contextDocument) &&
        checkKeyIsPresent('transaction_id', contextDocument) &&
        checkKeyIsPresent('message_id', contextDocument)
      ) {
        const contextBppId = contextDocument['bpp_id'];
        const contextBppURI = contextDocument['bpp_uri'];
        const contextLocation = contextDocument['location'];
        const transactionId = contextDocument['transaction_id'];
        const messageId = contextDocument['message_id'];
        if (checkKeyIsPresent('city', contextLocation)) {
          const contextCity = contextLocation['city'];
          const contextCityCode = contextCity['code'];
          const messageCatalog = messageDocument['catalog'];
          const providersArray = messageCatalog['providers'];
          const finalDocuments = [];
          for (const provider of providersArray) {
            const providerCategories = provider['categories'];
            const providerItems = provider['items'];
            for (const category of providerCategories) {
              for (const item of providerItems) {
                const itemCategoryIds = item.category_ids;
                for (const itemCatId of itemCategoryIds) {
                  const categoryId = category.id;
                  if (categoryId === itemCatId) {
                    const finalProvider = { ...provider };
                    finalProvider['categories'] = [category];
                    finalProvider['items'] = [item];
                    const finalData = { ...data };
                    finalData['message']['catalog']['providers'] = [
                      finalProvider,
                    ];
                    const providerDescriptor = provider['descriptor'];
                    const itemTags = item.tags;
                    const providerTags = provider.tags;
                    const itemForm = item.xinput.form;
                    const itemTagsArray = getFilteredTagsObject(itemTags);
                    const providerTagsArray =
                      getFilteredTagsObject(providerTags);
                    const providerId = provider.id;
                    const itemId = item.id;
                    const id = getUUID(
                      contextBppId +
                        contextCityCode +
                        providerId +
                        categoryId +
                        itemId,
                    );
                    const summary = {
                      [dbKeys.ID]: id,
                      [dbKeys.PROVIDER_DESCRIPTOR]: providerDescriptor,
                      [dbKeys.CATEGORY]: category.descriptor.name,
                      [dbKeys.PROVIDER_TAGS]: providerTagsArray,
                      [dbKeys.ITEM_TAGS]: itemTagsArray,
                      [dbKeys.FORM_ID]: itemForm.id,
                      [dbKeys.FORM_URL]: itemForm.url,
                      [dbKeys.ITEM_ID]: itemId,
                      [dbKeys.PROVIDER_ID]: providerId,
                      [dbKeys.TXN_ID]: transactionId,
                      [dbKeys.MSG_ID]: messageId,
                      [dbKeys.BPP_ID]: contextBppId,
                      [dbKeys.BPP_URI]: contextBppURI,
                    };
                    finalDocuments.push(summary);
                  }
                }
              }
            }
          }
          return finalDocuments;
        }
      }
    }
  }
  return null;
};