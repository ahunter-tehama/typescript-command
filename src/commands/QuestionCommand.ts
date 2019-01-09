/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {CommanderStatic} from "commander";
import {AbstractCommand} from "./AbstractCommand";

export class QuestionCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
        program
            .command("question")
            .description("Ask a question command")
            .action(async () => {
                await this.action.handle();
            });
    }
}
