# EX-06: ค้นหา Insight ด้วย Analyst

ทีมบริการมีข้อมูลหลายเดือน แต่การอ่านทีละแถวทำให้มองไม่เห็นแนวโน้ม พวกเราจะส่ง Dataset ให้ Analyst ช่วยค้นหาสิ่งที่ควรตรวจสอบต่อ

**ระยะเวลา:** 6–8 นาที

> **สิทธิ์ใช้งาน:** Analyst ต้องปรากฏใต้ **Agents** และผู้ดูแลระบบต้องอนุญาตให้ใช้งาน `ต้องตรวจสอบก่อนเริ่มอบรม`

## Scenario: เตรียมข้อมูลสำหรับการตัดสินใจ

### Practice 1: วิเคราะห์แนวโน้มและสร้าง Chart

ใน Practice นี้ พวกเราจะให้ Analyst วิเคราะห์ไฟล์หนึ่งไฟล์ แล้วสรุปสามข้อพร้อม Chart ที่ช่วยตรวจสอบคำตอบ

#### Steps

1. Download <a href="/ms-agent-a-thon-2026/files/busy-workday-service-data.xlsx" download="busy-workday-service-data.xlsx">busy-workday-service-data.xlsx</a>
2. เปิด **Microsoft 365 Copilot** แล้วเลือก **Analyst** ใต้ **Agents**
3. เลือกปุ่ม **+** หรือ **Attach content** แล้ว Upload Workbook
4. Copy Prompt ด้านล่างไปวาง

```text
Analyze the attached service data.

Show me only:
1. The most important trend
2. The biggest issue or unusual result
3. One action the team should investigate next

Create one simple chart that supports your findings.
Do not invent causes that are not supported by the data.
```

5. เปรียบเทียบคำตอบกับตารางและ Chart ที่ Analyst สร้าง

#### Checkpoint

- มีข้อค้นพบไม่เกินสามรายการ
- Chart ใช้ข้อมูลจาก Workbook และสอดคล้องกับข้อค้นพบ
- สาเหตุที่ข้อมูลไม่ได้พิสูจน์ถูกเขียนเป็นสิ่งที่ต้องตรวจสอบ ไม่ใช่ข้อเท็จจริง

#### Expected Output

รายงานสั้นที่มี Trend, จุดผิดปกติหรือปัญหา, งานตรวจสอบถัดไป และ Chart หนึ่งภาพ

> **Fallback:** หาก Analyst ไม่พร้อม ให้เปิด Sheet `Expected analysis` ใน Workbook แล้วใช้ข้อมูลนั้นฝึกแยก Fact ออกจาก Assumption

[← EX-05: Researcher กับข้อมูลงานและเว็บ](./ex-05-researcher-work-and-web) | [EX-07: Busy Day Guide →](/03-agent-builder/ex-07-busy-day-guide)
