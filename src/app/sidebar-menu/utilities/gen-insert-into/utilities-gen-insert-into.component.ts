import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gen-insert-into',
  standalone: true,
  imports: [
    CodeDisplayComponent
  ],
  templateUrl: './utilities-gen-insert-into.component.html',
  styleUrl: './utilities-gen-insert-into.component.css'
})
export class UtilitiesGenInsertIntoComponent {

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  readonly exampleRawOutput: string = `+------+------------------------------------------------+--------+
| id   | name                                           | status |
+------+------------------------------------------------+--------+
| 1166 | 揭阳市亿钢工贸有限公司-国内                    |      1 |
| 1175 | 扬州钛度体育用品厂-国内                        |      1 |
| 1189 | 深圳市雅琪家具有限公司-国内                    |      1 |
| 1212 | 狮王日用化工(青岛)有限公司                     |      1 |
| 1357 | 兰溪市睿智办公用品有限公司-国内                |      1 |
+------+------------------------------------------------+--------+`;

  readonly exampleParsedOutput: string = `INSERT INTO tenant(id, name, status)
VALUES ('1166', '揭阳市亿钢工贸有限公司-国内', '1'),
       ('1175', '扬州钛度体育用品厂-国内', '1'),
       ('1189', '深圳市雅琪家具有限公司-国内', '1'),
       ('1212', '狮王日用化工(青岛)有限公司', '1'),
       ('1357', '兰溪市睿智办公用品有限公司-国内', '1')`;

  @Input() generatedSQL: string = this.exampleParsedOutput + ';';
  @ViewChild('rawOutput') rawOutput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('codeResult') codeResult!: CodeDisplayComponent;

  private convertToInsertStatements(
    tableName: string,
    rawOutput: string,
    lowercaseKeywords: boolean = false,
    generateMultipleStatements: boolean = false,
    skipBrokenLines: boolean = false,
    treatNullAsText: boolean = false
  ): string {
    const rawLines = rawOutput.split("\n");
    const lines = rawLines.slice(1, rawLines.length - 1).map(line => line.trim());
    const columnNames = this.removeExtraSpaces(lines[0].split(/\s+\|\s+/));

    let result = `${lowercaseKeywords ? "insert into" : "INSERT INTO"} ${tableName} (${columnNames.join(", ")}) `;
    if (!generateMultipleStatements) {
      result += `${lowercaseKeywords ? "values" : "VALUES"}\n`;
    }

    const dataRows: string[][] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line || line.startsWith("+-") && line.endsWith("-+")) {
        continue;
      }

      try {
        const row = line.substring(1, line.length - 1).trim().split(/\|\s+/).map(value => {
          value = value.trim();
          if (value === "NULL" && treatNullAsText) {
            return "'NULL'";
          }
          return value === "NULL" ? "NULL" : `'${value.replace(/'/g, "\\'")}'`;
        });
        dataRows.push(row);
      } catch (error) {
        if (skipBrokenLines) {
          continue;
        }
        throw new Error(`Error parsing line: "${line}"`);
      }
    }

    if (generateMultipleStatements) {
      result = dataRows
        .map(row => {
          const values = row.join(", ");
          return `${lowercaseKeywords ? "insert into" : "INSERT INTO"} ${tableName} (${columnNames.join(", ")}) ${lowercaseKeywords ? "values" : "VALUES"} (${values});`;
        })
        .join("\n");
    } else {
      for (const row of dataRows) {
        result += `(${row.join(", ")}),\n`;
      }
      result = result.slice(0, -2) + ";";
    }
    return result;
  }

  private removeExtraSpaces(arr: string[]): string[] {
    return arr.map(item => item.replace(/\|/g, " ").trim());
  }

  genSQL() {
    if (isPlatformBrowser(this.platformId)) {
      console.log(this.convertToInsertStatements('my_table', this.rawOutput.nativeElement.value))
    }
  }
}
