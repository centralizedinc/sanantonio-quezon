<template>
  <a-card title="Business Permit">
    <a-row>
      <a-col :span="24">
        <a-steps size="small" :current="step_curr">
          <a-step title="Application Details"></a-step>
          <a-step title="Business Details"></a-step>
          <a-step title="Requirements"></a-step>
          <a-step title="Business Insurance"></a-step>
          <a-step title="Payments"></a-step>
        </a-steps>
        <a-divider></a-divider>
      </a-col>
      <a-col :span="24">
        <a-form>
          <!-- application details -->
          <template v-if="step_curr==0">
            <a-form-item label="Application" :label-col="{ span: 8}" :wrapper-col="{ span: 16 }">
              <a-radio-group v-model="form.application.app_type">
                <a-radio :value="1">New</a-radio>
                <a-radio :value="2">Renewal</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item
              label="Reference No./B.I.N."
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input placeholder="Reference No." v-model="form.application.reference_no"></a-input>
            </a-form-item>
            <a-form-item
              label="Date of Application in PBR"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-date-picker
                placeholder="Select Date"
                style="width:100%"
                v-model="form.application.pbr_date"
              />
            </a-form-item>
            <a-form-item
              label="Date of Application in LGU"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-date-picker
                placeholder="Select Date"
                style="width:100%"
                v-model="form.application.lgu_date"
              />
            </a-form-item>
            <a-form-item
              label="DTI/SEC/CDA Registration No."
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input placeholder="Registration Number" v-model="form.application.registration_no"></a-input>
            </a-form-item>
          </template>
          <!-- business details -->
          <template v-if="step_curr==1">
            <a-form-item
              label="Kind of Onwership"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-radio-group v-model="form.business.ownership">
                <a-radio :value="1">Sole Proprietorship</a-radio>
                <a-radio :value="2">Partnership</a-radio>
                <a-radio :value="3">Corporation</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="TIN" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Tax Identification Number" v-model="form.business.tin"></a-input>
            </a-form-item>
            <a-form-item label="SSS No" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Social Security Number" v-model="form.business.sss"></a-input>
            </a-form-item>
            <a-form-item label="Business Name" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Name of Business" v-model="form.business.business_name"></a-input>
            </a-form-item>
            <a-form-item
              label="Contact Number"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input placeholder="Business Telephone Number" v-model="form.business.contact"></a-input>
            </a-form-item>
            <a-form-item label="Email Address" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Business Email" v-model="form.business.email"></a-input>
            </a-form-item>
            <a-form-item label="Business Address" :label-col="{ span: 8 }">
              <a-textarea
                rows="3"
                placeholder="Full Business Address"
                style="width: 605px"
                v-model="form.business.business_address"
              ></a-textarea>
            </a-form-item>
            <a-form-item
              label="Name of Application/Owner/Manager"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16}"
            >
              <a-input placeholder="Surname, First name, MI" v-model="form.business.amo.name"></a-input>
              <div align="center">
                <a-checkbox
                  @change="sameAddress"
                  defaultChecked
                >Check if Applicant's/Owner's/Manager's address is same with business address</a-checkbox>
              </div>
            </a-form-item>
            <template v-if="!same_address">
              <div>
                <a-form-item label="Applicant's/Owner's/Manager's Address" :label-col="{ span: 8 }">
                  <a-textarea
                    rows="3"
                    placeholder="Full Applicant's/Owner's/Manager's Address"
                    style="width: 605px"
                    v-model="form.business.amo.address"
                  ></a-textarea>
                </a-form-item>
                <a-form-item
                  label="Contact Number"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input
                    placeholder="Applicant's/Owner's/Manager's Telephone Number"
                    v-model="form.business.amo.contact"
                  ></a-input>
                </a-form-item>
                <a-form-item
                  label="Email Address"
                  :label-col="{ span: 8 }"
                  :wrapper-col="{ span: 16 }"
                >
                  <a-input
                    placeholder="Applicant's/Owner's/Manager's Email"
                    v-model="form.business.amo.email"
                  ></a-input>
                </a-form-item>
              </div>
            </template>
            <!-- Applicant's/Owner's/Manager's Address -->
            <a-form-item label="Business Area" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input
                placeholder="Lot Area in square meters (sqm)"
                v-model="form.business.business_area"
              ></a-input>
            </a-form-item>
            <a-form-item
              label="Number of Owners"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input-number :min="1" :defaultValue="1" v-model="form.business.owner_no"></a-input-number>
            </a-form-item>
            <a-form-item
              label="Number of Employees"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input-number :defaultValue="1" v-model="form.business.employees_no.professional" />Professional
              <a-input-number
                :defaultValue="1"
                v-model="form.business.employees_no.non_professional"
              />Non-Professional
            </a-form-item>
            <a-form-item label="Rented/Owned" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-radio-group v-model="form.business.business_type">
                <a-radio :value="1">Rented</a-radio>
                <a-radio :value="2">Owned</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item
              label="Property Index Number (P.I.N.)"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              Land
              <a-input-number v-model="form.business.property_pin.land" />Building
              <a-input-number v-model="form.business.property_pin.building" />Machinery
              <a-input-number v-model="form.business.property_pin.machinery" />
            </a-form-item>
            <template v-if="form.business.business_type==1">
              <a-form-item
                label="Lessor's Name"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input placeholder="Name of the Landowner" v-model="form.business.rented.lessor"></a-input>
              </a-form-item>
              <a-form-item
                label="Monthly Rental"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input
                  placeholder="Rent per Month in Peso(Php)"
                  v-model="form.business.rented.monthly_rental"
                ></a-input>
              </a-form-item>
              <a-form-item
                label="Lessor's Address"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-textarea
                  rows="3"
                  placeholder="Full Address"
                  v-model="form.business.rented.lessor_address"
                ></a-textarea>
              </a-form-item>
              <a-form-item
                label="Lessor's Contact Number"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input
                  placeholder="Lessor's Telephone Number"
                  v-model="form.business.rented.lessor_contact"
                ></a-input>
              </a-form-item>
              <a-form-item
                label="Lessor's E-mail Address"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input
                  placeholder="Lessor's E-mail Address"
                  v-model="form.business.rented.lessor_email"
                ></a-input>
              </a-form-item>
            </template>
            <a-divider orientation="left">Business Activities</a-divider>
            <!-- ///////////////////////////////////////////////////////////////////////// -->
            <!-- <a-table :columns="cols" :dataSource="activities"></a-table> -->
            <!-- <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
            <a-table :columns="columns" :dataSource="dataSource">-->
            <!-- <template slot="line_business" slot-scope="text, record">
                <editable-cell :text="text" @change="onCellChange(record.key, 'line_business', $event)" />
            </template>-->
            <!-- <template
                v-for="col in ['line_business', 'capital', 'receipts']"
                :slot="col"
                slot-scope="text, record, index"
              >
                <div :key="col">
                  <a-input
                    v-if="record.editable"
                    style="margin: -5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record.key, col)"
                  />
                  <template v-else>{{text}}</template>
                </div>
              </template>
              <template slot="operation" slot-scope="text, record, index">
                <div class="editable-row-operations">
                  <a-popconfirm
                    v-if="dataSource.length"
                    title="Sure to delete?"
                    @confirm="() => onDelete(record.key)"
                  >
                    <a href="javascript:;">Delete</a>
                  </a-popconfirm>
            </div>-->
            <!-- <div class="editable-row-operations">
                  <span v-if="record.editable">
                    <a @click="() => save(record.key)">Save</a>
                    <p>&nbsp;</p>
                    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                      <a>Cancel</a>
                    </a-popconfirm>
                  </span>
                  <span v-else>
                    <a @click="() => edit(record.key)">Edit</a>
                  </span>
            </div>-->
            <!-- </template>
            </a-table>-->
            <!-- ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] -->
            <a-input placeholder="Line of Business" v-model="line_business"></a-input>
            <a-input placeholder="Capitalization" v-model="capital"></a-input>
            <a-input placeholder="Gross Sales/Receipts" v-model="receipts"></a-input>
            <a-button class="editable-add-btn" @click="addBusinessActivities" v-if="!editing">Add</a-button>
            <a-button class="editable-add-btn" @click="saveEdit" v-if="editing">Edit</a-button>
            <a-button class="editable-add-btn" @click="onCancel" v-if="editing">Cancel</a-button>

            <a-table bordered :dataSource="form.business.business_activities" :columns="columns">
              <template slot="operation" slot-scope="text, record, index">
                <a-popconfirm
                  v-if="form.business.business_activities.length"
                  title="Sure to delete?"
                  @confirm="() => onEdit(record, index)"
                >
                  <a href="javascript:;">Edit</a>
                </a-popconfirm>
                <a-popconfirm
                  v-if="form.business.business_activities.length"
                  title="Sure to delete?"
                  @confirm="() => onDelete(index)"
                >
                  <a href="javascript:;">Delete</a>
                </a-popconfirm>
              </template>
            </a-table>

            <!-- ///////////////////////////////////////////////////////////////////////// -->
            <a-form-item
              label="Mode of Pyament"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-radio-group v-model="form.business.payment.mode">
                <a-radio :value="1">Annual/Full</a-radio>
                <a-radio :value="2">Quarterly</a-radio>
              </a-radio-group>
              <a-input-number
                v-if="form.business.payment.mode == 2"
                size="small"
                :min="1"
                :max="4"
                placeholder="No. of QTR"
                v-model="form.business.payment.qrtly"
              ></a-input-number>
            </a-form-item>
          </template>

          <template v-if="step_curr==2">
            <a-upload-dragger
              v-model="form.documents"
              name="file"
              :multiple="true"
              @change="upload"
            >
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text">Click or drag file to this area to upload</p>
              <p
                class="ant-upload-hint"
              >Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </a-upload-dragger>
          </template>

          <template v-if="step_curr==3">
            <a-row :gutter="8">
              <a-col :span="12">
                <a-button block @click="insured(1)">AIG</a-button>
                <a-button block @click="insured(2)">AXA Philippines</a-button>
                <a-button block @click="insured(3)">Malayan</a-button>
                <a-button block @click="insured(4)">MAPRE Philippines</a-button>
                <a-card title="Card Title" :style="{ marginTop: '16px' }">
                  <a-card-grid style="width:50%;textAlign:left">
                    <p>
                      Lorem ipsum
                      Dolor sit amet
                      Consetetur sadipscing elitr
                      Sed diam n voluptua
                      At vero eos et accusam
                    </p>
                  </a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">
                    <p>
                      Lorem ipsum
                      Dolor sit amet
                      Consetetur sadipscing elitr
                      Sed diam n voluptua
                      At vero eos et accusam
                    </p>
                  </a-card-grid>
                </a-card>
              </a-col>
              <a-col :span="11">
                <a-card title="Payment Details">
                  <a-card-grid style="width:50%;textAlign:left">Application Fee</a-card-grid>
                  <a-card-grid
                    style="width:50%;textAlign:'center'"
                  >₱{{form.business_insurance.app_fee}}</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">LRF(Legal Research Fee)</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">₱{{form.business_insurance.lrf}}</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">Interest</a-card-grid>
                  <a-card-grid
                    style="width:50%;textAlign:'center'"
                  >₱{{form.business_insurance.interest}}</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">Surcharge</a-card-grid>
                  <a-card-grid
                    style="width:50%;textAlign:'center'"
                  >₱{{form.business_insurance.surcharge}}</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">Total</a-card-grid>
                  <a-card-grid
                    style="width:50%;textAlign:'center'"
                  >₱{{form.business_insurance.total}}</a-card-grid>
                </a-card>
              </a-col>
            </a-row>
          </template>

          <template v-if="step_curr==4">
            <a-row>
              <a-col :span="6">
                <a-steps direction="vertical" size="small" :current="step_pay">
                  <a-step title="Payment Information" />
                  <a-step title="Billing Details " />
                  <a-step title="Review" />
                  <a-step title="Pay" />
                </a-steps>
              </a-col>
              <a-col :span="18">
                <a-card style="textAlign:'center'">
                  <a-card v-if="step_pay==0">
                    <div align="center">
                      <h1>{{form.payment_info.desc}}</h1>
                      <h1>₱{{form.payment_info.amount}}</h1>
                      <h1>PAYMENT METHOD</h1>
                      <a-row :gutter="8">
                        <a-col :span="9">
                          <div align="right">
                            <img
                              src="https://i.ibb.co/h127LnF/1055px-7-eleven-logo-tile.jpg"
                              alt="1055px-7-eleven-logo-tile"
                              border="0"
                              width="60"
                              height="60"
                            />
                          </div>
                        </a-col>
                        <a-col :span="15">
                          <h2 align="left" type="bold">OVER THE COUNTER</h2>
                          <h5 align="left">
                            Cebuana Lhullier, M Lhuillier,
                            7-11 or Coins.ph
                          </h5>
                        </a-col>
                      </a-row>
                    </div>
                  </a-card>
                  <a-card v-if="step_pay==1">
                    <h4>Customer Information</h4>
                    <a-input placeholder="E-mail Address" v-model="form.billing_info.email"></a-input>
                    <a-input placeholder="Phone/Mobile" v-model="form.billing_info.contact"></a-input>
                    <a-input placeholder="Name" v-model="form.billing_info.name"></a-input>
                  </a-card>
                  <a-card v-if="step_pay==2">
                    <a-card title="Payment Information">
                      <a-card-grid style="width:50%;textAlign:left">Description</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">{{form.payment_info.desc}}</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Amount</a-card-grid>
                      <a-card-grid
                        style="width:50%;textAlign:'center'"
                      >₱{{form.payment_info.amount}}</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Payment Method</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">{{form.payment_info.method}}</a-card-grid>
                    </a-card>
                    <a-card title="Billing Details">
                      <a-card-grid style="width:50%;textAlign:left">Name</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">{{form.billing_info.name}}</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">E-mail</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">{{form.billing_info.email}}</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Phone/Mobile</a-card-grid>
                      <a-card-grid
                        style="width:50%;textAlign:'center'"
                      >{{form.billing_info.contact}}</a-card-grid>
                    </a-card>
                  </a-card>
                  <a-modal v-model="visible" data-backdrop="static" data-keyboard="false">
                    <template slot="footer">
                      <a-button>
                        <a-icon type="download" />Download
                      </a-button>
                      <a-button @click="confirm()">Confirm</a-button>
                    </template>
                    <div align="center">
                      <h2>Amount Due (before fee)</h2>
                      <h1 style="color:#0F82E0">₱1500</h1>
                      <h3>Payment Instructions:</h3>
                      <h5>1. Go to the nearest 7-Eleven store.</h5>
                      <h5>
                        2. Request for a 7-Connect payment at the cashier
                        <br />
                        with Reference Number: {{ref_num}}
                      </h5>
                      <h2>OR</h2>
                      <h3>SCAN BARCODE</h3>
                      <barcode v-bind:value="barcodeValue">Show this if the rendering fails.</barcode>
                      <h5>3. Complete your payment and you have paid the payment request.</h5>
                    </div>
                  </a-modal>
                </a-card>
              </a-col>
            </a-row>
          </template>
        </a-form>
      </a-col>
    </a-row>
    <a-row type="flex" justify="end" :gutter="16">
      <a-col :span="3">
        <a-button block ghost type="primary" @click="step_curr--">Back</a-button>
      </a-col>
      <a-col :span="3">
        <a-button block type="primary" @click="step_curr++">Next</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import VueBarcode from "vue-barcode";
import axios from "axios";

export default {
  components: {
    barcode: VueBarcode
  },
  data() {
    return {
      insurance: {
        name: "",
        fee: 0
      },
      step_curr: 0,
      step_pay: 0,
      same_address: true,
      pay: false,
      visible: false,
      barcodeValue: "123-456-789",
      // **************************************
      form: {
        application: {
          permit_type: "Business Permit",
          app_type: null,
          reference_no: null,
          pbr_date: null,
          lgu_date: null,
          registration_no: null
        },
        business: {
          ownership: null,
          tin: null,
          sss: null,
          business_name: "",
          contact: null,
          email: "",
          business_address: "",
          // AMO - Applicat/Manager/Owner
          amo: {
            name: "",
            address: "",
            contact: null,
            email: ""
          },
          business_area: "",
          owner_no: null,
          employees_no: {
            professional: null,
            non_professional: null
          },
          business_type: null,
          rented: {
            lessor: "",
            monthly_rental: null,
            lessor_address: "",
            lessor_conatct: null,
            lessor_email: ""
          },
          property_pin: {
            land: null,
            building: null,
            machinery: null
          },
          business_activities: [],
          payment: {
            mode: null,
            qrtly: null
          }
        },
        documents: [],
        business_insurance: {
          provider: "",
          app_fee: 0,
          lrf: 0,
          interest: 0,
          surcharge: 0,
          total: 0
        },
        payment_info: {
          desc: "Business Clearance",
          amount: 1500,
          method: "Over the Counter"
        },
        billing_info: {
          name: "",
          email: "",
          contact: null
        },
        progress: {
          status: "On Progress",
          current_task: "Payment",
          previous_task: ""
        }
      },
      // ***************************************
      ref_num: "123-456-789",
      activities: [],
      value: 1,
      line_business: "",
      capital: "",
      receipts: "",
      business_activities: [],
      editing: false,
      key: 0,
      dataSource: [
        {
          line_business: "Edward King 0",
          capital: "32",
          receipts: "London, Park Lane no. 0"
        },
        {
          line_business: "Edward King 1",
          capital: "32",
          receipts: "London, Park Lane no. 1"
        }
      ],
      count: 2,
      columns: [
        {
          title: "Line of Business",
          dataIndex: "line_business",
          width: "30%",
          scopedSlots: { customRender: "line_business" }
        },
        {
          title: "Capitalization",
          dataIndex: "capital",
          scopedSlots: { customRender: "capital" }
        },
        {
          title: "Gross Sales/Receipts",
          dataIndex: "receipts",
          scopedSlots: { customRender: "receipts" }
        },
        {
          title: "operation",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ],
      cols: [
        {
          title: "Line of Business"
        },
        {
          title: "Capitalization"
        },
        {
          title: "Gross Sales/Receipts"
        }
      ]
    };
  },
  watch: {
    step_curr() {
      console.log("step curr data: " + JSON.stringify(this.step_curr));
      console.log("step pay data: " + JSON.stringify(this.step_pay));
      if (this.step_curr > 4) {
        this.pay = true;
        this.step_pay++;
        this.step_curr = 4;
        console.log("step > 4");
        if (this.step_pay == 3) {
          console.log("step_pay == 4");
          this.visible = true;
        }
      } else if (this.pay && this.step_pay != 0 && this.step_curr == 3) {
        console.log(
          "else if step curr data: " + JSON.stringify(this.step_curr)
        );
        console.log("else if step pay data: " + JSON.stringify(this.step_pay));
        this.step_pay--;
        this.step_curr = 4;
        if (this.step_pay == 0) {
          this.pay = false;
          this.step_curr = 4;
        }
      } else if (this.step_pay === 1) {
        console.log("step pay ");
        if (
          this.form.email == null &&
          this.form.email == "" &&
          this.form.email == undefined &&
          this.form.phone == null &&
          this.form.phone == "" &&
          this.form.phone == undefined &&
          this.form.name == null &&
          this.form.name == "" &&
          this.form.name == undefined
        ) {
          console.log("fill it up");
          this.step_pay = 1;
        }
      }
    },
    visible() {
      console.log("visible status: " + JSON.stringify(this.visible));
      this.visible = true;
    }
  },
  methods: {
    insured(key) {
      var product = [
        {
          name: "",
          fee: 0
        },
        {
          provider: "AIG",
          app_fee: 15000,
          lrf: 150,
          interest: 0,
          surcharge: 0,
          total: 15150
        },
        {
          provider: "AXA Philippines",
          app_fee: 16000,
          lrf: 160,
          interest: 0,
          surcharge: 0,
          total: 16160
        },
        {
          provider: "Malayan",
          app_fee: 17000,
          lrf: 170,
          interest: 0,
          surcharge: 0,
          total: 17170
        },
        {
          provider: "MAPRE Philippines",
          app_fee: 18000,
          lrf: 180,
          interest: 0,
          surcharge: 0,
          total: 18180
        }
      ];
      // this.insurance = product[key];
      this.form.business_insurance = product[key];
    },
    redirect(nav) {
      this.$emit("redirect", nav);
    },
    upload(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    addBusinessActivities() {
      if (
        this.line_business != null &&
        this.line_business != "" &&
        this.capital != null &&
        this.capital != "" &&
        this.receipts != null &&
        this.receipts != ""
      ) {
        console.log("addBusinessActivities");
        this.form.business.business_activities.push({
          line_business: this.line_business,
          capital: this.capital,
          receipts: this.receipts
        });
        this.line_business = "";
        this.capital = "";
        this.receipts = "";
      }
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    sameAddress(e) {
      this.same_address = e.target.checked;
      console.log("same address value: " + JSON.stringify(this.same_address));
    },
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.key)[0];
      console.log("taget edit data: " + JSON.stringify(target));
      if (target) {
        target.editable = true;
        this.dataSource = newData;
      }
    },
    save(key) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.dataSource = newData;
        // this.cacheData = newData.map(item => ({ ...item }));
      }
    },
    cancel(key) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        // Object.assign(
        //   target,
        //   this.cacheData.filter(item => key === item.key)[0]
        // );
        delete target.editable;
        this.dataSource = newData;
      }
    },
    onDelete(key) {
      console.log("on delete key data: " + JSON.stringify(key));
      this.form.business.business_activities.splice(key);
      console.log(
        "business_activities data: " +
          JSON.stringify(this.form.business.business_activities)
      );
    },
    onEdit(record, key) {
      console.log("on edit key data: " + JSON.stringify(key));
      this.line_business = this.form.business.business_activities[
        key
      ].line_business;
      this.capital = this.form.business.business_activities[key].capital;
      this.receipts = this.form.business.business_activities[key].receipts;
      this.editing = true;
      this.key = key;
    },
    saveEdit() {
      this.form.business.business_activities[
        this.key
      ].line_business = this.line_business;
      this.form.business.business_activities[this.key].capital = this.capital;
      this.form.business.business_activities[this.key].receipts = this.receipts;
      this.onCancel();
    },
    onCancel() {
      this.editing = false;
      this.line_business = "";
      this.capital = "";
      this.receipts = "";
    },
    handleAdd() {
      const { count, dataSource } = this;
      var newData = {
        key: count,
        line_business: `Click here`,
        capital: "Click here",
        receipts: `Click here`
      };
      newData.editable = true;
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
    confirm() {
      console.log("confirm button data: " + JSON.stringify(this.form));
      if (this.same_address == true) {
        var amo = {
          address: this.form.business.business_address,
          contact: this.form.business.contact,
          email: this.form.business.email
        };
        this.form.business.amo = amo;
      }
      axios.post("permit/apply", this.form).then(save_permit => {
        console.log("saved permit" + JSON.stringify(save_permit));
        this.redirect("mainView");
      });
    }
  }
};
</script>

<style>
</style>